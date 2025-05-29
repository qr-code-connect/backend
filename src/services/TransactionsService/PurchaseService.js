import Ticket from '../../models/ticketsModel.js';
import Transaction from '../../models/TransactionsModel.js';
import Event from '../../models/eventsModels.js';
import Company from '../../models/companyModel.js';
import Category from '../../models/categoryModel.js';
import updateWalletBalanceService from '../WalletServices/updateBalanceService.js';

const purchaseTicketService = async (purchaseData) => {
    if (!Array.isArray(purchaseData) || purchaseData.length === 0) {
        throw new Error('No tickets provided for purchase');
    }

    // Extract unique idTicket and id_category values
    const ticketIds = purchaseData.map(ticket => ticket.idTicket);
    const categoryIds = purchaseData.map(ticket => ticket.id_category);

    // Fetch all relevant tickets
    const tickets = await Ticket.findAll({
        where: { id: ticketIds }
    });
    console.log(tickets);
    

    if (tickets.length !== ticketIds.length) {
        throw new Error('One or more tickets not found');
    }

    // Fetch all relevant categories
    const categories = await Category.findAll({
        where: { id: categoryIds }
    });

    if (categories.length !== new Set(categoryIds).size) {
        throw new Error('One or more categories not found');
    }

    // Map categories for easy lookup
    const categoryMap = categories.reduce((map, cat) => {
        map[cat.id] = cat;
        return map;
    }, {});

    let totalValue = 0;
    const updatedTickets = [];
    const categoriesToUpdate = new Map(); // To track categories for updating number_tickes

    // Process each ticket
    for (const ticketData of purchaseData) {
        const { idTicket, id_customer, id_category } = ticketData;
        const ticket = tickets.find(t => t.id === idTicket);
        let ticketstatus = ticket.available;
        console.log("LOGANDO TICKET STATUS", ticketstatus );
        
        if (!ticket) {
            throw new Error(`Ticket ${idTicket} not found`);
        }

        if (ticket.available === false) {
            throw new Error(`Ticket ${idTicket} is not available`);
        }

        const category = categoryMap[id_category];
        if (!category) {
            throw new Error(`Category ${id_category} not found for ticket ${idTicket}`);
        }

        // Track category for updating number_tickes
        if (!categoriesToUpdate.has(id_category)) {
            categoriesToUpdate.set(id_category, category);
        }

        totalValue += category.price;

        // Update ticket
        ticket.available = false;
        ticket.id_customer = id_customer;
        ticket.status = 'purchased';
        await ticket.save();

        updatedTickets.push(ticket);
    }

    // Update the number_tickes for each category
    for (const ticket of updatedTickets) {
        const category = categoriesToUpdate.get(ticket.id_category);
        category.number_tickes -= 1;
        if (category.number_tickes < 0) {
            throw new Error(`Not enough tickets available for category ${category.category}`);
        }
        await category.save();
    }

    // Fetch the company (using the first ticket's event for simplicity)
    const firstTicket = updatedTickets[0];
    const event = await Event.findByPk(firstTicket.id_event);
    if (!event) {
        throw new Error(`Event not found for ticket ${firstTicket.id}`);
    }
    const company = await Company.findByPk(event.id_company);
    if (!company) {
        throw new Error('Company not found for this event');
    }

    // Create transaction with total value
    const transaction = await Transaction.create({
        value: totalValue,
    });

    // Update the wallet balance of the company owner
    const updatedWallet = await updateWalletBalanceService(company.id_customer, totalValue);

    return { transaction, tickets: updatedTickets, updatedWallet };
};

export default purchaseTicketService;
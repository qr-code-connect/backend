// services/ticketServices/getAllTicketsService.js
import Ticket from "../../models/ticketsModel.js";
import Event from "../../models/eventsModels.js";
import Category from "../../models/categoryModel.js";
import Customer from "../../models/CustomerModel.js";

const getAllTicketsService = async (filters = {}) => {
  try {
    const { eventId, userId } = filters;
    const whereClause = {};
    
    if (eventId) {
      whereClause.id_event = eventId;
    }

    if (userId) {
      whereClause.id_customer = userId;
    }

    console.log("TICKET FILTERS:", filters);

    const tickets = await Ticket.findAll({
      where: whereClause,
      //include: [
      //  {
      //    model: Event,
      //    attributes: ['name', 'date', 'description'],
      //  },
      //  {
      //    model: Category,
      //    attributes: ['name', 'price'],
      //  },
      //  {
      //    model: Customer,
      //    attributes: ['name', 'email'],
      //  }
      //],
      order: [['createdAt', 'DESC']], // Newest tickets first
    });

    return tickets;
  } catch (error) {
    console.error("Error in getAllTicketsService:", error);
    throw new Error(`Failed to fetch tickets: ${error.message}`);
  }
};

export default getAllTicketsService;
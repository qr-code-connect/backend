import PurchaseTicketService from "../services/TicketsServices/purchaseTickeService.js";

const purchaseTicket = async (req, res) => {
    try {
        const {ticketId, customerId} = req.body;
        const result = await PurchaseTicketService(ticketId,customerId);

        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message }); 
    }
}


export default purchaseTicket;
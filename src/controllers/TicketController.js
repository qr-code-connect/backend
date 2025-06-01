import getAllTicketsService from "../services/TicketsServices/GetAllTicketservice.js";



export const getAllTickets = async (req, res) => {
  try {
    const filters = {
      eventId: req.query.eventId,
      userId: req.query.userId
    };
    
    const tickets = await getAllTicketsService(filters);
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error fetching tickets', 
      error: error.message 
    });
  }
};


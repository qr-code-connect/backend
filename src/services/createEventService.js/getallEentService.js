import Event from "../../models/eventsModels.js";

const getAllEventsService = async () => {
    try{
        const events = await Event.findAll();
        console.log("LOGANDO EVENTS", events);
        
        return events;
    } catch (error) {
        throw new Error(`Error fetching customers: ${error.message}`);
    };
};

export default getAllEventsService;
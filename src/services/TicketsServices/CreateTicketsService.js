import Ticket from "../../models/ticketsModel.js";
import qrcode from 'qrcode'



const CreateTicketService = async (ticketData,numbertickets) => {
    const {categoryId, eventId, ...restticketData} = ticketData;

    const tickets = [];

    for (let i = 0; i < numbertickets; i++) {
        const code = `TICKET-${eventId.slice(0, 8)}-${categoryId.slice(0, 4)}-${i}`;

        const qrCodeData = JSON.stringify({
            eventId,
        })

        const qrCodeImage = await qrcode.toDataURL(qrCodeData);

        const ticket = await Ticket.create({
            ...restticketData,
            qr_code_image:qrCodeImage,
            qr_code:code,
            id_event:eventId,
            id_category:categoryId,
        })

        tickets.push(ticket);
    }

    return tickets

} 





export default CreateTicketService;
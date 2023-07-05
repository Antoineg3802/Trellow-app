import { Ticket } from "../data/oneBoard"
import { TicketContainer } from "./styles/molecules/TicketContainer"

interface TicketProps{
    ticket : Ticket
}

const TicketColumn = ({ticket} : TicketProps) =>{

    const dateTS = new Date(ticket.expiration_date);
    const jour = dateTS.getDate().toString().padStart(2, '0');
    const mois = (dateTS.getMonth() + 1).toString().padStart(2, '0');
    const annee = dateTS.getFullYear().toString();
    const heure = dateTS.getHours().toString().padStart(2, '0');
    const minute = dateTS.getMinutes().toString().padStart(2, '0');

    const dateFormatee = `${jour}/${mois}/${annee} ${heure}:${minute}`;

    return (
        <div>
            <h3>{ticket.title}</h3>
            <p>{dateFormatee}</p>
        </div>
    )
}

export default TicketColumn
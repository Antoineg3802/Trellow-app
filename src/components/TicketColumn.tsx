import { Ticket } from "../data/oneBoard"

interface TicketProps{
    ticket : Ticket
}

const TicketColumn = ({ticket} : TicketProps) =>{

    return (
        <li>
            <div>
                <h3>{ticket.text}</h3>
                <p>{ticket.expiration_date}</p>
            </div>
        </li>
    )
}

export default TicketColumn
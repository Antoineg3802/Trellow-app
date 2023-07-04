import { Ticket } from "../data/oneBoard"
import { TicketContainer } from "./styles/organisms/TicketContainer"

interface TicketProps{
    ticket : Ticket
}

const TicketColumn = ({ticket} : TicketProps) =>{

    return (
        <TicketContainer>
            <li>
                <div>
                    <h3>{ticket.text}</h3>
                    <p>{ticket.expiration_date}</p>
                </div>
            </li>
        </TicketContainer>
    )
}

export default TicketColumn
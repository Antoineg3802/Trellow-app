import { useEffect } from 'react'
import { BoardColumn } from '../data/oneBoard'
import TicketColumn from './TicketColumn'

interface ColumnProps {
    column : BoardColumn
}

const Column = ({column} : ColumnProps) => {

    return (
        <div className="column">
            <h2>{column.title}</h2>
            <ul>
                {column.tickets.map((ticket)=>{
                    return <TicketColumn key={ticket.id} ticket={ticket}/>
                })}
            </ul>
        </div>
    )
}

export default Column
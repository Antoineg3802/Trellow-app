import { useEffect } from 'react'

import { BoardColumn } from '../data/oneBoard'
import TicketColumn from './TicketColumn'
import { BoardColumnContainer } from './styles/atoms/Containers'

interface ColumnProps {
    column : BoardColumn
}

const Column = ({column} : ColumnProps) => {

    return (
        <BoardColumnContainer>
            <h2>{column.title}</h2>
            <ul>
                {column.tickets.map((ticket)=>{
                    return <TicketColumn key={ticket.id} ticket={ticket}/>
                })}
            </ul>
        </BoardColumnContainer>
    )
}

export default Column
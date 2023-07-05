import { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { useCookies } from "react-cookie";

import { BoardColumn } from '../data/oneBoard'
import TicketColumn from './TicketColumn'
import { BoardColumnContainer, ErrorDivDisplay, TicketsContainer } from './styles/atoms/Containers'
import { ColumnTitles } from './styles/atoms/Titles'
import { TicketContainer } from './styles/molecules/TicketContainer'
import { editTicket } from '../services/ticketServices';
import { AddCard } from './styles/atoms/Button'

interface ColumnProps {
    column : BoardColumn
}

const Column = ({column} : ColumnProps) => {

    const [cookies] = useCookies(['access_token', 'refresh_token'])
    const [ticketOrder, setTicketOrder] = useState(column.tickets.map(ticket => ticket.id.toString()));

    const handleDragEnd = (result: DropResult) => {
        const { source, destination } = result;
        if (!destination) {
            return;
        }

        const newTicketOrder = Array.from(ticketOrder);
        newTicketOrder.splice(source.index, 1);
        newTicketOrder.splice(destination.index, 0, result.draggableId);

        newTicketOrder.map((ticketId, index) => {
            editTicket(cookies.access_token, ticketId, {"position" : index })
            .then((bool)=>{
                if (!bool) {
                    return <ErrorDivDisplay>Erreur</ErrorDivDisplay>
                }
            })
        })

        setTicketOrder(newTicketOrder);
    };

    const addCard = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event)
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId={column.id.toString()}>
            {(provided) => (
                <BoardColumnContainer {...provided.droppableProps} ref={provided.innerRef}>
                    <ColumnTitles>{column.title}</ColumnTitles>
                    <hr/>
                        <TicketsContainer>
                            {ticketOrder.map((ticketId, index) => {
                                const ticket = column.tickets.find(t => t.id.toString() === ticketId);
                                if (!ticket) {
                                    return null;
                                }

                                return (
                                    <Draggable key={ticket.id} draggableId={ticket.id.toString()} index={index} isDragDisabled={false}>
                                    {(provided) => (
                                        <TicketContainer
                                        key={ticket.id}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        >
                                            <TicketColumn ticket={ticket} />
                                        </TicketContainer>
                                    )}
                                    </Draggable>
                                );
                            })}
                            <AddCard onClick={addCard}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48" fill="grey"><path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z"/></svg>
                            </AddCard>
                        </TicketsContainer>

                    {provided.placeholder}
                </BoardColumnContainer>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default Column
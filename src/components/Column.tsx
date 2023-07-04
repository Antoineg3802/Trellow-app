import { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

import { BoardColumn } from '../data/oneBoard'
import TicketColumn from './TicketColumn'
import { BoardColumnContainer } from './styles/atoms/Containers'
import { ColumnTitles } from './styles/atoms/Titles'
import { TicketContainer } from './styles/organisms/TicketContainer'

interface ColumnProps {
    column : BoardColumn
}

const Column = ({column} : ColumnProps) => {

    const [ticketOrder, setTicketOrder] = useState(column.tickets.map(ticket => ticket.id.toString()));

    const handleDragEnd = (result: DropResult) => {
        const { source, destination } = result;
        if (!destination) {
            return;
        }

        const newTicketOrder = Array.from(ticketOrder);
        newTicketOrder.splice(source.index, 1);
        newTicketOrder.splice(destination.index, 0, result.draggableId);

        setTicketOrder(newTicketOrder);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId={column.title}>
            {(provided) => (
                <BoardColumnContainer {...provided.droppableProps} ref={provided.innerRef}>
                    <ColumnTitles>{column.title}</ColumnTitles>
                    {ticketOrder.map((ticketId, index) => {
                        const ticket = column.tickets.find(t => t.id.toString() === ticketId);
                        if (!ticket) {
                            return null;
                        }

                        return (
                            <Draggable key={ticket.id} draggableId={ticket.id.toString()} index={index}>
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

                    {provided.placeholder}
                </BoardColumnContainer>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default Column
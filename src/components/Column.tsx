import { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { useCookies } from "react-cookie";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { BoardColumn } from '../data/oneBoard'
import TicketColumn from './TicketColumn'
import { BoardColumnContainer, ErrorDivDisplay, TicketsContainer, PopupContainer, CenteredContainer, DisplayFormRow } from './styles/atoms/Containers'
import { ColumnTitles } from './styles/atoms/Titles'
import { TicketContainer } from './styles/molecules/TicketContainer'
import { editTicket } from '../services/ticketServices';
import { AddCard, CloseButton, CreateCardButton } from './styles/atoms/Button'
import { createTicket } from '../services/ticketServices';

interface ColumnProps {
    column : BoardColumn
}

const Column = ({column} : ColumnProps) => {

    const [cookies] = useCookies(['access_token', 'refresh_token'])
    const [ticketOrder, setTicketOrder] = useState(column.tickets.map(ticket => ticket.id.toString()));
    const [showPopup, setShowPopup] = useState(false);
    const [date, setDate] = useState(new Date());
    const [cardTitle, setCardTitle] = useState(String)

    const addCard = () => {
        setShowPopup(true);
    };
    
    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const formatDate = (date: Date): string => {
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const seconds = String(date.getUTCSeconds()).padStart(2, '0');
        const timezoneOffset = date.getTimezoneOffset();
        const timezoneOffsetHours = Math.abs(Math.floor(timezoneOffset / 60)).toString().padStart(2, '0');

        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+${timezoneOffsetHours}`;
    };
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const columnId = formData.get('columnId') as string

        createTicket(cookies.access_token, parseInt(columnId), cardTitle, 'tutu', formatDate(date), ticketOrder.length)

        setShowPopup(false);
    };

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
                            {showPopup && (
                                <PopupContainer>
                                    <CloseButton onClick={handleClosePopup}><svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></CloseButton>
                                    <CenteredContainer>
                                        <form onSubmit={handleSubmit}>
                                            <DisplayFormRow>
                                                <label htmlFor="card-title">Nom de la carte</label>
                                                <input id="card-title" name="card-title" type="text" required onChange={((tutu)=>setCardTitle(tutu.currentTarget.value))} />
                                            </DisplayFormRow>
                                            <DisplayFormRow>
                                                <label htmlFor="card-date">tutu</label>
                                                <DatePicker selected={date} name="card-name" onChange={((date : Date)=>setDate(date))}/>
                                            </DisplayFormRow>
                                            <input type="hidden" name="columnId" value={column.id}/>
                                            <CreateCardButton type="submit">Créer cette Carte</CreateCardButton>
                                        </form>
                                    </CenteredContainer>
                                </PopupContainer>
                            )}
                        </TicketsContainer>

                    {provided.placeholder}
                </BoardColumnContainer>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default Column
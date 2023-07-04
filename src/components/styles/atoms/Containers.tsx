import styled from 'styled-components'

export const BoardContainer = styled.div`
display: flex;
gap: 1vw;
height: 100%;
border-radius : 2vw;
padding : 2vw;
background-color: #4bbbe1;
box-shadow: 20px 20px 30px rgb(75, 187, 225, 0.2);
`

export const DragDropContextContainer = styled.div`
background-color: grey;
width: fit-content;
padding: 2vw;
`

export const TicketContainer = styled.div`
background-color: #fff;
padding: 1vw;
border: 1px solid black;
`

export const BoardColumnContainer = styled.div`
background-color: #fff;
width: 20vw
`
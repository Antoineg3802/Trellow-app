import styled from 'styled-components'

export const BoardContainer = styled.div`
display: flex;
gap: 1vw;
height: 80vh;
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

export const BoardColumnContainer = styled.div`
background-color: #fff;
width: 20vw;
height: 70vh;
border-radius : 1vw;
padding: 1vw;
`

export const ErrorDivDisplay = styled.div`
background-color:red;
color: white;
`

export const TicketsContainer = styled.div`
max-height: 60vh;
overflow: auto;
scrollbar-width: thin;
scrollbar-color: transparent transparent;
`

export const PopupContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 30vw;
    height: 30vh;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: block;
`;

export const CenteredContainer = styled.div`
    position: relative;
    top:50%;
    transform: translate(-50%, -50%);
    left:50%;
`

export const DisplayFormRow = styled.div`
margin-left: auto;
margin-right: auto;
`
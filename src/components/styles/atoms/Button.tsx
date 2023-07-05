import styled from "styled-components";

export const AddCard = styled.button`
margin-top: 20px;
background-color: #fff;
border: 1px solid grey ;
width: 100%;
border-radius : 1vw;
&:hover{
    cursor: pointer;
}
`

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
`;

export const CreateCardButton = styled.button`
color : #fff;
background-color: #4bbbe1;
border: 1px solid #4bbbe1;
cursor: pointer;
border-radius :1vw;
margin-left: auto;
margin-right: auto;
width: 100%;
height: 5vh;

&:hover{
    color : #4bbbe1;
    background-color: #fff;
}
`

// export const TicketButton = styled.button`
// border: none;
// box-shadow: none;
// width: 100%;
// `
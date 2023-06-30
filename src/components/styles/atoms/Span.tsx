import styled from 'styled-components'
import { BoardCard } from '../molecules/BoardCard'

export const DisplayUserLevel = styled.span`
background-color: ${props=>props.color};
color : #fff;
padding-left: 2%;
padding-right: 2%;
border: 1px solid #fff;
border-radius: 10px;
position: absolute;
top : 1rem;
right : 1rem;

${BoardCard}:hover & {
    color: #4bbbe1;
    border: 1px solid #4bbbe1;
}
`
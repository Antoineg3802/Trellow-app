import styled from 'styled-components'
import { BoardCard } from '../molecules/BoardCard'

export const MainTitle = styled.h1`
margin-top: 1rem;
margin-bottom: 1rem;
text-align: center;
font-size: 10vh;
`

export const H2 = styled.h2`
background-color: ${props=>props.color};
${BoardCard}:hover & {
    color: #4bbbe1;
}
`

export const H3 = styled.h3`
color: black;   
`

export const TitleBoard = styled.h1`
`

export const ColumnTitles = styled.h2`
`
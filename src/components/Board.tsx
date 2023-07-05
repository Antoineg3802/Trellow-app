import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie';

import { getOneBoards } from "../services/boardServices";
import { OneBoard } from '../data/oneBoard';
import Column from './Column';
import { TitleBoard } from './styles/atoms/Titles';
import { BoardContainer } from './styles/atoms/Containers'
import { FullPageContainer } from './styles/organisms/FullPageContainer';

const Board = (doUserCan : boolean) => {
    const [cookies] = useCookies(['access_token', 'refresh_token'])
    let boardId: number = +useParams().boardId!;

    const [board, setBoard] = useState<OneBoard>();
    useEffect(()=>{

        let ignore = false

        getOneBoards(cookies.access_token, boardId).then((response)=>{
            if (!ignore)
                setBoard(response)
        })

        return (()=>{
            ignore = true
        })
    }, [])

    return (
        <FullPageContainer>
            <TitleBoard>{board?.title}</TitleBoard>
            <BoardContainer>
                {board?.board_columns.map((column) =>(
                    <Column key={column.id} column={column} />
                ))}
            </BoardContainer>
            <br />
            {/* {board?.users.map((user)=>(
                <div key={user.user.id}>
                    <p>{user.user.id}</p>
                    <p>{user.user.email}</p>
                </div>
            ))} */}
        </FullPageContainer>
    ) 
}

export default Board;
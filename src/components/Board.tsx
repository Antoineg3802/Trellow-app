import { useParams } from 'react-router-dom';
import { getOneBoards } from "../services/boardServices";
import { useEffect, useState } from "react";
import { OneBoard } from '../data/oneBoard';
import { useCookies } from 'react-cookie';
import Column from './Column';

const Board = () => {
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
        <div className="container">
            <h1>{board?.title}</h1>
            <div>
                {board?.board_columns.map((column) =>(
                    <Column key={column.id} column={column} />
                ))}
            </div>
            <br />
            {/* {board?.users.map((user)=>(
                <div key={user.user.id}>
                    <p>{user.user.id}</p>
                    <p>{user.user.email}</p>
                </div>
            ))} */}
        </div>
    ) 
}

export default Board;
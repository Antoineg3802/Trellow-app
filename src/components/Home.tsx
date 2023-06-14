import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import AUTH from "../data/auth";
import { getBoardsUser } from "../services/boardServices";
import { Boards } from "../data/boards";
import {H1, H2, H3} from './styles/atoms/Titles';



const Home = () => {
    const [cookies] = useCookies(['access_token', 'refresh_token'])
    const [auth, setAuth] = useState<AUTH>();
    const [data, setData] = useState<Boards>();

    useEffect(() => {

        let ignore = false

        getBoardsUser(cookies.access_token).then((boards) => {
            if (!ignore)
                setData(boards);
        });
    }, []);


    return (
        <div className="container" id="home-container">
            <H1 color="red">Mes tableaux</H1>
            <div className="all-boards">
                {data?.board.map((board) => (
                    <div key={board.board.id} className="boards" >
                        <a href={"/board/" + board.board.id} className="link-to-board">
                            <H3>{board.board.title}</H3>
                            <p>{board.board.hash}</p>
                            <p>{board.role}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default Home;

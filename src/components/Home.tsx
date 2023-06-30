import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import AUTH from "../data/auth";
import { getBoardsUser } from "../services/boardServices";
import { Boards } from "../data/boards";

import {MainTitle, H2, H3} from './styles/atoms/Titles';
import { DisplayUserLevel } from './styles/atoms/Span';
import { LinkToBoard } from './styles/atoms/Link';
import { BoardCard } from './styles/molecules/BoardCard';
import { BoardAllCards } from "./styles/organisms/BordAllCards";
import { MainContainer } from "./styles/organisms/MainContainer"

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
            <MainTitle color="red">Mes tableaux</MainTitle>
            <BoardAllCards>
                {data?.board.map((board) => (
                    <BoardCard key={board.board.id} >
                        <LinkToBoard href={"/board/" + board.board.id}>
                            <H3>{board.board.title}</H3>
                            <DisplayUserLevel>{board.role}</DisplayUserLevel>
                        </LinkToBoard>
                    </BoardCard>
                ))}
            </BoardAllCards>
        </div>
    );

};

export default Home;

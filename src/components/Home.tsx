import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import AUTH from "../data/auth";
import { getBoardsUser } from "../services/boardServices";
import { Boards } from "../data/boards";

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
        <div className="container">
            <h1>Mes tableaux</h1>
            <div>
                {data?.board.map((board) => (
                    <div key={board.board.id}>
                        <a href={"/board/" + board.board.id}>
                            <h3>{board.board.title}</h3>
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

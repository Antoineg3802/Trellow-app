import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import AUTH from "../data/auth";
import { BOARDS } from "../data/boards";
import getBoardsUser from "../services/boardServices";

const Home = () => {
    const [cookies] = useCookies(['access_token', 'refresh_token'])
    const [auth, setAuth] = useState<AUTH>();
    const [data, setData] = useState<BOARDS>();

    useEffect(() => {
        getBoardsUser(cookies.access_token).then((boards) => {
            setData(boards);
        });
    }, []);


    return (
        <div className="container">
            <h1>Home</h1>

            <div className="row">
                <a href={`/`}>
                    <img src="/Trellow_logo.png" className="logo trellow" alt="Trellow" />
                </a>
            </div>
            <div>
                {data?.board.map((board) => (
                    <div key={board.board.id}>
                        <h3>{board.board.title}</h3>
                        <p>{board.board.hash}</p>
                        <p>{board.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

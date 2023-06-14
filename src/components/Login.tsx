import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import AUTH from "../data/auth";
import { getAuth } from "../services/authServices";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(['access_token', 'refresh_token'])
    const [auth, setAuth] = useState<AUTH>();

    return (
        <div className="container">
            <h1>Bienvenue sur Trellow</h1>

            <div className="row">
                <a>
                    <img src="/assets/Trellow_logo.png" className="logo trellow" alt="Trellow" />
                </a>
            </div>
            <h2>Connection</h2>
            <p>Merci de vous connecter pour accéder à vos tableaux. Si vous n'en possédez pas encore un, veuillez vous rendre <a href={`/register`}>Ici</a>.</p>

            <div className="">
                <form
                    onSubmit={(e) => {
                        let expires = new Date()
                        expires.setTime(expires.getTime() + (60 * 60 * 1000))
                        e.preventDefault();
                        getAuth(email, password).then((auth) => {
                            setAuth(auth);
                            setCookie('access_token', auth?.token, { path: '/', expires })
                            setCookie('refresh_token', auth?.refresh_token, { path: '/', expires })
                            window.location.href = "/home";
                        });

                    }}

                >
                    <input
                        id="greet-input"
                        onChange={(e) => setEmail(e.currentTarget.value)}
                        placeholder="Email"
                    />
                    <input
                        id="greet-input"
                        onChange={(e) => setPassword(e.currentTarget.value)}
                        placeholder="Mot de passe"
                    />
                    <button type="submit">Valider</button>
                </form>
            </div>
        </div>
    );
};

export default Login;

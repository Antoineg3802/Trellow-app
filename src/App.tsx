import { useEffect, useState } from "react";
import { fetch } from "@tauri-apps/api/http";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import Users from "./components/Users";
import "./App.css";
import { useCookies } from "react-cookie";
import getAuth from "./services/authServices";
import AUTH from "./data/auth";
import SignUp from "./components/Test";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(['access_token', 'refresh_token'])
  const [auth, setAuth] = useState<AUTH>();

  //   const handle = () => {
  //     setCookie('JWT', jwt, { path: '/' });
  //  };



  return (
    <div className="container">
      <h1>Bienvenue sur Trellow</h1>

      <div className="row">
        <a>
          <img src="/Trellow_logo.png" className="logo vite" alt="Trellow" />
        </a>
      </div>

      <p>Merci de vous authentifier pour accéder à vos tableaux.</p>

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
      {/* <Users /> */}
    </div>
  );
}

export default App;

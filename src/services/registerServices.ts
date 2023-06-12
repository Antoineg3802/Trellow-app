import { Body, ResponseType, getClient } from "@tauri-apps/api/http";
import AUTH from "../data/auth";
import getAuth from "./authServices";

const register = (email: string, password: string): Promise<AUTH> => {
    return new Promise(async (resolve) => {
        const client = await getClient();
        client
            .post<AUTH>("http://127.0.0.1:8000/api/user/register",
                Body.json({
                    email: email,
                    password: password
                }), {
                timeout: 30,
                responseType: ResponseType.JSON,
            })
            .then((res) => {
                console.log(res.status)
                if (res.status == 201) {
                    let auth: Promise<AUTH> = getAuth(email,password);
                    resolve(auth)
                }

            });
    })
}

export default register;
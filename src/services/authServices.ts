import AUTH from '../data/auth';
import { Body, getClient, ResponseType } from '@tauri-apps/api/http'

const getAuth = (email : string, password : string): Promise<AUTH> => {
    return new Promise(async (resolve) => {
        const client = await getClient();
        client
            .post<AUTH>("http://127.0.0.1:8000/api/login_check",
                Body.json({
                    username: email,
                    password: password
                }), {
                timeout: 30,
                responseType: ResponseType.JSON,
            })
            .then((res) => {
                let auth: AUTH = res.data;
                resolve(auth)
            });
    })
}

export default getAuth;
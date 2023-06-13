import AUTH from '../data/auth';
import { Body, getClient, ResponseType } from '@tauri-apps/api/http'

export const getAuth = (email : string, password : string): Promise<AUTH> => {
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

export const getAuthByRefreshToken = (refresh_token : string): Promise<AUTH> => {
    return new Promise(async (resolve) => {
        const client = await getClient();
        client
            .post<AUTH>("http://127.0.0.1:8000/api/refresh_token",
                Body.json({
                    refresh_token: refresh_token
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

export const register = (email: string, password: string): Promise<AUTH> => {
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

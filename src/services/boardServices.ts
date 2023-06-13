import {getClient, ResponseType} from '@tauri-apps/api/http'
import { BOARDS } from '../data/boards';
import { useCookies } from 'react-cookie';

export const getBoardsUser = (token: string): Promise<BOARDS> => {
    return new Promise (async(resolve) => {
        const client = await getClient();
		client
			.get<BOARDS>("http://127.0.0.1:8000/api/boards", {
				timeout: 30,
				responseType: ResponseType.JSON,
				headers: {"Authorization" : `Bearer ${token}`}
			})
			.then((res) => {
                let boards: BOARDS = res.data;
                resolve(boards)
			});
    })
}

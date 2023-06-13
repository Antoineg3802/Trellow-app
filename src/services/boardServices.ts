import { Body, getClient, ResponseType } from '@tauri-apps/api/http'
import { useCookies } from 'react-cookie';
import { Board, Boards } from '../data/boards';
import { OneBoard } from '../data/oneBoard';

export const getBoardsUser = (token: string): Promise<Boards> => {
	return new Promise(async (resolve) => {
		const client = await getClient();
		client
			.get<Boards>("http://127.0.0.1:8000/api/boards", {
				timeout: 30,
				responseType: ResponseType.JSON,
				headers: { "Authorization": `Bearer ${token}` }
			})
			.then((res) => {
				let boards: Boards = res.data;
				resolve(boards)
			});
	})
}

export const getOneBoards = (token: string, id: number): Promise<OneBoard> => {
	return new Promise(async (resolve) => {
		const client = await getClient();
		client
			.get<OneBoard>(`http://127.0.0.1:8000/api/board/${id}`, {
				timeout: 30,
				responseType: ResponseType.JSON,
				headers: { "Authorization": `Bearer ${token}` }
			})
			.then((res) => {
				let boards: OneBoard = res.data;
				resolve(boards)
			});
	})
}

export const createBoard = (token: string, title: string): Promise<Boolean> => {
	return new Promise(async (resolve) => {
		const client = await getClient();
		client
			.post<Boolean>("http://127.0.0.1:8000/api/board",
				Body.json({
					title: title
				}), {
				timeout: 30,
				responseType: ResponseType.JSON,
				headers: { "Authorization": `Bearer ${token}` }
			})
			.then((res) => {
				console.log(res.status)
				if (res.status == 201) {
					resolve(true)
				} else {
					resolve(false)
				}
			});
	})
}

export const joinBoard = (token: string, hash: string): Promise<Boolean> => {
	return new Promise(async (resolve) => {
		const client = await getClient();
		client
			.post<Boolean>(`http://127.0.0.1:8000/api/board/join/${hash}`,
				Body.json({
				}), {
				timeout: 30,
				responseType: ResponseType.JSON,
				headers: { "Authorization": `Bearer ${token}` }
			})
			.then((res) => {
				console.log(res.status)
				if (res.status == 204) {
					resolve(true)
				} else {
					resolve(false)
				}
			});
	})
}

export const leaveBoard = (token: string, id: string): Promise<Boolean> => {
	return new Promise(async (resolve) => {
		const client = await getClient();
		client
			.post<Boolean>(`http://127.0.0.1:8000/api/board/leave/${id}`,
				Body.json({
				}), {
				timeout: 30,
				responseType: ResponseType.JSON,
				headers: { "Authorization": `Bearer ${token}` }
			})
			.then((res) => {
				console.log(res.status)
				if (res.status == 204) {
					resolve(true)
				} else {
					resolve(false)
				}
			});
	})
}

export const kickUserBoard = (token: string, id: string, userId: number): Promise<Boolean> => {
	return new Promise(async (resolve) => {
		const client = await getClient();
		client
			.post<Boolean>(`http://127.0.0.1:8000/api/board/kick/${id}`,
				Body.json({
					user_id: userId
				}), {
				timeout: 30,
				responseType: ResponseType.JSON,
				headers: { "Authorization": `Bearer ${token}` }
			})
			.then((res) => {
				console.log(res.status)
				if (res.status == 204) {
					resolve(true)
				} else {
					resolve(false)
				}
			});
	})
}

export const upUserPerm = (token: string, id: string, userId: number): Promise<Boolean> => {
	return new Promise(async (resolve) => {
		const client = await getClient();
		client
			.patch<Boolean>(`http://127.0.0.1:8000/api/board/upgrade/${id}`,
				{
					body: Body.json({
						user_id: userId
					}),
					timeout: 30,
					responseType: ResponseType.JSON,
					headers: { "Authorization": `Bearer ${token}` }
				})
			.then((res) => {
				console.log(res.status)
				if (res.status == 204) {
					resolve(true)
				} else {
					resolve(false)
				}
			});
	})
}

export const downUserPerm = (token: string, id: string, userId: number): Promise<Boolean> => {
	return new Promise(async (resolve) => {
		const client = await getClient();
		client
			.patch<Boolean>(`http://127.0.0.1:8000/api/board/downgrade/${id}`,
				{
					body: Body.json({
						user_id: userId
					}),
					timeout: 30,
					responseType: ResponseType.JSON,
					headers: { "Authorization": `Bearer ${token}` }
				})
			.then((res) => {
				console.log(res.status)
				if (res.status == 204) {
					resolve(true)
				} else {
					resolve(false)
				}
			});
	})
}

export const deleteBoard = (token: string, id: string): Promise<Boolean> => {
	return new Promise(async (resolve) => {
		const client = await getClient();
		client
			.delete<Boolean>(`http://127.0.0.1:8000/api/board/delete/${id}`,
				{
					timeout: 30,
					responseType: ResponseType.JSON,
					headers: { "Authorization": `Bearer ${token}` }
				})
			.then((res) => {
				console.log(res.status)
				if (res.status == 204) {
					resolve(true)
				} else {
					resolve(false)
				}
			});
	})
}
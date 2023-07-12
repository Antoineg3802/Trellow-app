import { Body, ResponseType, getClient } from "@tauri-apps/api/http";
import { TicketInfo } from "../data/ticket";

export const createTicket = (token: string,columnId:number,title:string, text: string, expiration_date: String, position:number): Promise<Boolean> => {
	return new Promise(async (resolve) => {
		const client = await getClient();
		client
			.post<Boolean>(`http://127.0.0.1:8000/api/ticket/${columnId}`,
				Body.json({
					position:position,
					text: text,
					title: title,
                    expiration_date: expiration_date
				}), {
				timeout: 30,
				responseType: ResponseType.JSON,
				headers: { "Authorization": `Bearer ${token}` }
			})
			.then((res) => {
				console.log(res.status)
				console.log(res.data)
				if (res.status == 201) {
					resolve(true)
				} else {
					resolve(false)
				}
			});
	})
}

export const editTicket = (token: string, id: string, field: Partial<{text: string, position: number, expiration_date: Date, columnReference: number}>): Promise<Boolean> => {
	return new Promise(async (resolve) => {
		const client = await getClient();
		client
			.patch<Boolean>(`http://127.0.0.1:8000/api/ticket/${id}`,
				{
					body: Body.json(field),
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

export const deleteColumn = (token: string, id: string): Promise<Boolean> => {
	return new Promise(async (resolve) => {
		const client = await getClient();
		client
			.delete<Boolean>(`http://127.0.0.1:8000/api/ticket/${id}`,
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

export const addUserOnTicket = (token: string, id:number, users: number[]): Promise<Boolean> => {
	return new Promise(async (resolve) => {
		const client = await getClient();
		client
			.post<Boolean>(`http://127.0.0.1:8000/api/ticket/addUser/${id}`,
				Body.json({
					user:users
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

export const rmvUserOnTicket = (token: string, id:number, users: number[]): Promise<Boolean> => {
	return new Promise(async (resolve) => {
		const client = await getClient();
		client
			.post<Boolean>(`http://127.0.0.1:8000/api/ticket/rmvUser/${id}`,
				Body.json({
					user:users
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

export const getOneTicket = (token: string, id: number): Promise<TicketInfo> => {
	return new Promise(async (resolve) => {
		const client = await getClient();
		client
			.get<TicketInfo>(`http://127.0.0.1:8000/api/ticket/${id}`, {
				timeout: 30,
				responseType: ResponseType.JSON,
				headers: { "Authorization": `Bearer ${token}` }
			})
			.then((res) => {
				let ticket: TicketInfo = res.data;
				resolve(ticket)
			});
	})
}
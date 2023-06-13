import { Body, ResponseType, getClient } from "@tauri-apps/api/http";

export const createColumn = (token: string,boardId:number, title: string): Promise<Boolean> => {
	return new Promise(async (resolve) => {
		const client = await getClient();
		client
			.post<Boolean>(`http://127.0.0.1:8000/api/column/${boardId}`,
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

export const editColumn = (token: string, columnId: string, title: string): Promise<Boolean> => {
	return new Promise(async (resolve) => {
		const client = await getClient();
		client
			.patch<Boolean>(`http://127.0.0.1:8000/api/column/${columnId}`,
				{
					body: Body.json({
						title: title
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

export const deleteColumn = (token: string, columnId: string): Promise<Boolean> => {
	return new Promise(async (resolve) => {
		const client = await getClient();
		client
			.delete<Boolean>(`http://127.0.0.1:8000/api/column/${columnId}`,
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
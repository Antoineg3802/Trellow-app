import { ResponseType, getClient } from "@tauri-apps/api/http";
import { UserInfo } from "../data/oneBoard";

export const getUserInfo = (token: string): Promise<UserInfo> => {
	return new Promise(async (resolve) => {
		const client = await getClient();
		client
			.get<UserInfo>(`http://127.0.0.1:8000/api/user`, {
				timeout: 30,
				responseType: ResponseType.JSON,
				headers: { "Authorization": `Bearer ${token}` }
			})
			.then((res) => {
				let user: UserInfo = res.data;
				resolve(user)
			});
	})
}
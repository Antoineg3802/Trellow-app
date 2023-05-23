import USER from '../data/user'
import {getClient, ResponseType} from '@tauri-apps/api/http'

const getUsers = (): Promise<USER[]> => {
    return new Promise (async(resolve) => {
        const client = await getClient();
		client
			.get<USER[]>("https://jsonplaceholder.typicode.com/users", {
				timeout: 30,
				responseType: ResponseType.JSON,
			})
			.then((res) => {
                console.log(res.data, typeof res.data);
                let users: USER[] = res.data;
                resolve(users)
			});
    })
}

export default getUsers;
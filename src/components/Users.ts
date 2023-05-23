import { fetch, Body, getClient, ResponseType } from "@tauri-apps/api/http";
import React, { useEffect, useState } from "react";
import USER from "../data/user";
import getUsers from "../services/userServices";

const Users = () => {
	const [data, setData] = useState<USER[]>([]);

	useEffect(() => {
		getUsers()
		// fetch("https://jsonplaceholder.typicode.com/users")
		// .then(response => response.data)
		// .then((res<USER[]>) => {
		//     console.log("set data");
		//
		// })
	}, []);

	// return (
	// 	<>
	// 		<div>
	// 			{data.map((user) => (
	// 				<div key={user.id}>
	// 					<h3>{user.name}</h3>
	// 					<p>{user.email}</p>
	// 				</div>
	// 			))}
	// 		</div>
	// 	</>
	// );
};

export default Users;

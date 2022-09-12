import axios from "axios";
const URL = "http://localhost:5000/";

function getToken() {
	const auth = JSON.parse(localStorage.getItem("myWallet"));
	if (auth) {
		const token = {
			headers: {
				Authorization: `Bearer ${auth}`,
			},
		};
		return token;
	}
	return false;
}

function createUser(body) {
	return axios.post(`${URL}sign-up`, body);
}

function userLogin(body) {
	return axios.post(`${URL}sign-in`, body);
}

function createMovement(body) {
	const token = getToken();
	return axios.post(`${URL}movements`, body, token);
}
function getMovements() {
	const token = getToken();
	return axios.get(`${URL}movements`, token);
}

export { userLogin, createUser, createMovement, getMovements, getToken };

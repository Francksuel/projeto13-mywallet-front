import styled from "styled-components";
import Button from "./common/Button";
import Input from "./common/Input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../services/myWallet";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const navigate = useNavigate();
	function logInto(e) {
		e.preventDefault();
		const dataLog = {
			email,
			password,
		};
		const request = postLogin(dataLog);
		request.catch((error) => {
			alert(error.response.data);			
		});
		request.then((res) => {
			localStorage.setItem("myWallet", JSON.stringify(res.data.token));			
			navigate("/home");
		});
	}
	return (
		<Wrapper>
			<h1>MyWallet</h1>
			<form onSubmit={logInto}>
				<Input
					placeholder={"E-mail"}
					type={"email"}
					disabled={false}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					placeholder={"Senha"}
					type={"password"}
					disabled={false}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button value={"Entrar"} />
			</form>
			<Link to={"/cadaster"}><h2>Primeira vez? Cadastre-se!</h2></Link>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h1 {
		margin: 159px 0 24px 0;
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

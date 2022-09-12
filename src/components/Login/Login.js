import styled from "styled-components";
import Button from "../common/Button";
import Input from "../common/Input";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getToken, userLogin } from "../../services/myWallet";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isDisabled, setIsDisabled] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const isLogged = getToken();
		if (isLogged) {
			navigate("/home");
		}
	}, [navigate]);

	function logInto(e) {
		e.preventDefault();
		setIsDisabled(true);
		const dataLog = {
			email,
			password,
		};
		const request = userLogin(dataLog);
		request.catch((error) => {
			setIsDisabled(false);
			if (error.code === "ERR_NETWORK") {
				return alert("Falha ao conectar com o servidor");
			}
			alert(error.response.data);
		});
		request.then((res) => {
			localStorage.setItem("myWallet", JSON.stringify(res.data.token));
			localStorage.setItem("myWallet/username", JSON.stringify(res.data.name));
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
					disabled={isDisabled}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					placeholder={"Senha"}
					type={"password"}
					disabled={isDisabled}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button value={"Entrar"} disabled={isDisabled} />
			</form>
			{isDisabled ? (
				<h2>Primeira vez? Cadastre-se!</h2>
			) : (
				<Link to={"/cadaster"}>
					<h2>Primeira vez? Cadastre-se!</h2>
				</Link>
			)}
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

import styled from "styled-components";
import Input from "../common/Input";
import { useState } from "react";
import Button from "../common/Button";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../services/myWallet";

export default function Cadaster() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [isDisabled, setIsDisabled] = useState(false);
	const navigate = useNavigate();

	function registration(e) {
		e.preventDefault();
		setIsDisabled(true);
		if (password !== passwordConfirm) {
			setIsDisabled(false);
			return alert("As senhas digitadas não coincidem!");
		}
		const dataLog = {
			name,
			email,
			password,
		};
		const request = createUser(dataLog);
		request.catch((error) => {
			setIsDisabled(false);
			if (error.code === "ERR_NETWORK") {
				return alert("Falha ao conectar com o servidor");
			}
			alert(error.response.data);
		});
		request.then(() => {
			alert("Usuário cadastrado com sucesso!");
			navigate("/");
		});
	}

	return (
		<Wrapper>
			<h1>MyWallet</h1>
			<form onSubmit={registration}>
				<Input
					placeholder={"Nome"}
					type={"text"}
					value={name}
					disabled={isDisabled}
					onChange={(e) => setName(e.target.value)}
				/>
				<Input
					placeholder={"E-mail"}
					type={"email"}
					value={email}
					disabled={isDisabled}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					placeholder={"Senha"}
					type={"password"}
					value={password}
					disabled={isDisabled}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Input
					placeholder={"Confirme a senha"}
					type={"password"}
					value={passwordConfirm}
					disabled={isDisabled}
					onChange={(e) => setPasswordConfirm(e.target.value)}
				/>
				<Button value={"Cadastrar"} disabled={isDisabled} />
			</form>
			{isDisabled ? (
				<h2>Já tem uma conta? Entre agora!</h2>
			) : (
				<Link to={"/"} disabled={isDisabled}>
					<h2>Já tem uma conta? Entre agora!</h2>
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
		margin: 95px 0 24px 0;
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

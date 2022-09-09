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
	const navigate = useNavigate();

	function registration(e) {
		e.preventDefault();
        if (password !== passwordConfirm){
            return alert ("As senhas digitadas não coincidem!");
        }
		const dataLog = {
            name,
			email,
			password
		};
		const request = createUser(dataLog);
		request.catch((error) => {
			alert(error.response.data);
		});
		request.then(() => {		
            alert ("Usuário cadastrado com sucesso!");	
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
					disabled={false}
					onChange={(e) => setName(e.target.value)}
				/>
				<Input
					placeholder={"E-mail"}
					type={"email"}
					value={email}
					disabled={false}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					placeholder={"Senha"}
					type={"password"}
					value={password}
					disabled={false}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Input
					placeholder={"Confirme a senha"}
					type={"password"}
					value={passwordConfirm}
					disabled={false}
					onChange={(e) => setPasswordConfirm(e.target.value)}
				/>
				<Button value={"Cadastrar"} />
			</form>
			<Link to={"/"}>
				<h2>Já tem uma conta? Entre agora!</h2>
			</Link>
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

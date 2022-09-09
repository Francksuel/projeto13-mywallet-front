import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getToken } from "../../services/myWallet";
import { LogOutOutline } from "react-ionicons";
import Movements from "./Movements";
import ButtonAdd from "./ButtonAdd";

export default function Home() {
	const navigate = useNavigate();
	useEffect(() => {
		const isLogged = getToken();
		if (!isLogged) {
			alert("Você não está logado!");
			navigate("/");
		}
	}, [navigate]);

	function logout() {
		if (window.confirm("Deseja sair da sua conta?")) {
			window.localStorage.removeItem("myWallet");
			window.localStorage.removeItem("myWallet/username");
			navigate("/");
		}
	}

	function addMovement(type) {
		navigate("/addmovement", { state: type });
	}

	const username = JSON.parse(localStorage.getItem("myWallet/username"));

	return (
		<Wrapper>
			<Top>
				<h3>Olá, {username}</h3>
				<LogOutOutline
					onClick={() => logout()}
					color="white"
					width="24px"
					height="24px"
				/>
			</Top>
			<Movements />
			<Buttons>
				<ButtonAdd
					onClick={() => addMovement("entrada")}
					value={"Nova entrada"}
				/>
				<ButtonAdd onClick={() => addMovement("saída")} value={"Nova saída"} />
			</Buttons>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 87vw;
	margin: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const Buttons = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;
const Top = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 78px;
	width: 100%;
`;

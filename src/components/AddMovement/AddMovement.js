import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createMovement } from "../../services/myWallet";
import Button from "../common/Button";
import Input from "../common/Input";

export default function AddMovement() {
	const location = useLocation();
	const [valor, setValor] = useState("");
	const [description, setDescription] = useState("");
	const [isDisabled, setIsDisabled] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (location.state === null) {
			navigate("/home");
		}
	}, [navigate, location.state]);

	function sendMovement(e) {
		e.preventDefault();
		setIsDisabled(true);
		const movement = {
			valor,
			description,
			type: location.state,
		};
		const request = createMovement(movement);
		request.catch((error) => {
			setIsDisabled(false);
			if (error.code === "ERR_NETWORK") {
				return alert("Falha ao conectar com o servidor");
			}
			alert(error.response.data);
		});
		request.then(() => {
			navigate("/home");
		});
	}

	return (
		<Wrapper>
			<Header>
				<h3>Nova {location.state}</h3>
			</Header>
			<form onSubmit={sendMovement}>
				<Input
					placeholder="Valor"
					type="number"
					value={valor}
					name="quantity"
					max="999999.99"
					step="0.01"
					min="0.01"
					disabled={isDisabled}
					onChange={(e) => setValor(e.target.value)}
				/>
				<Input
					placeholder="Descrição"
					type="text"
					maxLength="20"
					value={description}
					disabled={isDisabled}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<Button value={`Salvar ${location.state}`} disabled={isDisabled} />
			</form>
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
const Header = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: 100px;
`;

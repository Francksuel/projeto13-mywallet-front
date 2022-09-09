import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { createMovement } from "../../services/myWallet";
import Button from "../common/Button";
import Input from "../common/Input";

export default function AddMovement() {
	const location = useLocation();
	const [valor, setValor] = useState("");
	const [description, setDescription] = useState("");
	const navigate = useNavigate();

	function sendMovement(e) {
		e.preventDefault(); 
		const movement = {
			valor,
			description,
			type: location.state,
		};
		const request = createMovement(movement);
		request.catch((error) => {
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
					step="0.01"
					min="0.01"
					disabled={false}
					onChange={(e) => setValor(e.target.value)}
				/>
				<Input
					placeholder="Descrição"
					type="text"
					value={description}
					disabled={false}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<Button value={`Salvar ${location.state}`} />
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

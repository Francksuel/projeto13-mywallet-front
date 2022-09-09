import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMovements } from "../../services/myWallet";
import Movement from "./Movement";


export default function Movements() {
	const [movements, setMovements] = useState([]);
	useEffect(() => {
		const promise = getMovements();
		promise.then((res) => setMovements(res.data));
	}, []);
	return (
		<Wrapper>
			{movements.length !== 0 ? (
				(movements.map(movement => <Movement />))
			) : (
				<div>
					<p>Não há registros de entrada ou saída</p>
				</div>
			)}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	border-radius: 5px;
	height: calc(100vh - 221px);
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	div {
		width: 48vw;
		text-align: center;
	}
	p {
		color: #868686;
		font-size: 20px;
	}
`;

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
				movements.map((movement) => (
					<Movement
						key={movement._id}
						type={movement.type}
						description={movement.description}
						valor={movement.valor}
						day={movement.day}
					/>
				))
			) : (
				<NoRegistry>Não há registros de entrada ou saída</NoRegistry>
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
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 23px 11px 10px 12px;
`;
const NoRegistry = styled.div`
	width: 48vw;
	text-align: center;
	color: #868686;
	font-size: 20px;
`;

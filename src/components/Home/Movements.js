import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMovements } from "../../services/myWallet";
import Balance from "./Balance";
import Movement from "./Movement";

export default function Movements() {
	const [movements, setMovements] = useState([]);
	let balance = 0;
	useEffect(() => {
		const promise = getMovements();
		promise.catch((error) => {
			if (error.code === "ERR_NETWORK") {
				return alert("Falha ao conectar com o servidor");
			}
			alert(error.response.data);
		});

		promise.then((res) => {
			const arrayMovements = res.data.reverse();
			setMovements(arrayMovements);
		});
	}, []);
	if (movements.length !== 0) {
		movements.forEach((movement) => {
			if (movement.type === "entrada") {
				balance += Number(movement.valor);
			} else {
				balance -= Number(movement.valor);
			}
		});
	}
	return (
		<Wrapper>
			{movements.length !== 0 ? (
				<>
					<Values>
						{movements.map((movement) => (
							<Movement
								key={movement._id}
								type={movement.type}
								description={movement.description}
								valor={movement.valor}
								day={movement.day}
							/>
						))}
					</Values>
					<Balance balance={balance} />
				</>
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
	justify-content: space-between;
	align-items: center;
	padding: 23px 11px 10px 12px;
`;
const NoRegistry = styled.div`
	width: 48vw;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: #868686;
	font-size: 20px;
`;
const Values = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 90%;
	overflow-y: scroll;
`;

import styled from "styled-components";

export default function Balance({ balance }) {
	balance = Math.round(balance * 100) / 100;
	const valueBalance = Math.abs(balance)
		.toFixed(2)
		.toString()
		.replace(".", ",");
	return (
		<Wrapper>
			<h5>Saldo</h5>
			<ValueBalance balance={balance}>{valueBalance}</ValueBalance>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 20px;
	width: 100%;
	h5 {
		font-size: 17px;
		font-weight: 700;
	}
`;
const ValueBalance = styled.div`
	color: ${(props) => {
		if (props.balance === 0) {
			return "black";
		} else if (props.balance < 0) {
			return "red";
		} else {
			return "green";
		}
	}};
`;

import styled from "styled-components";
import dayjs from "dayjs";

export default function Movement({ day, type, description, valor }) {
	const date = dayjs(day).format("DD/MM");
	const value = Number(valor).toFixed(2).replace(".", ",");

	return (
		<Wrapper>
			<Date>{date}</Date>
			<Description>
				{description} <Valor type={type}>{value}</Valor>
			</Description>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	width: 100%;
	margin-bottom: 20px;
	display: flex;
`;
const Date = styled.div`
	width: 48px;
	color: gray;
	font-size: 16px;
`;
const Description = styled.div`
	display: flex;
	width: 100%;
	margin-left: 7px;
	justify-content: space-between;
	font-size: 16px;
`;
const Valor = styled.p`
	color: ${(props) => (props.type === "entrada" ? "green" : "red")};
`;

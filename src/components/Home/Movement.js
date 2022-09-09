import styled from "styled-components";
import dayjs from "dayjs";

export default function Movement({ day, type, description, valor }) {
	const date = dayjs(day).format("DD/MM");
	return (
		<Wrapper>
			<Date>{date}</Date>
			<Description>
				{description} <Valor type={type}>{valor}</Valor>
                </Description>
		</Wrapper>
	);
}
const Wrapper = styled.div`
width: 100%;
display: flex;
`
const Date = styled.div`
	color: gray;
	font-size: 16px;
`;
const Description = styled.div`
	display: flex;
    width: 100%;
	justify-content: space-between;
	font-size: 16px;  
`;
const Valor = styled.p`
color: ${props => props.type === "entrada" ? "green" : "red"};
`

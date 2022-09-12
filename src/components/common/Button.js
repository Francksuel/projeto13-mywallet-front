import styled from "styled-components";

export default function Button({ value, disabled }) {
	return <Wrapper disabled={disabled}>{value}</Wrapper>;
}
const Wrapper = styled.button`
	background-color: #a328d6;
	width: 87vw;
	height: 46px;
	font-size: 20px;
	font-weight: 700;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	border: none;
	cursor: pointer;
`;

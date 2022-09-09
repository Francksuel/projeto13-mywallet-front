import styled from "styled-components";
import { AddCircleOutline, RemoveCircleOutline } from "react-ionicons";
export default function ButtonAdd({ value, ...otherProps }) {
	return (
		<Wrapper {...otherProps}>
			{value === "Nova entrada" ? (
				<AddCircleOutline color="white" width="25px" height="25px" />
			) : (
				<RemoveCircleOutline color="white" width="25px" height="25px" />
			)}
			{value}
		</Wrapper>
	);
}
const Wrapper = styled.button`
	width: 41.3vw;
	height: 114px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 13px;
	margin-bottom: 16px;
	background-color: #a328d6;
	border-radius: 5px;
	border: none;
	color: white;
	font-size: 17px;
	font-weight: 700;
	cursor: pointer;
`;

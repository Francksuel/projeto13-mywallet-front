import styled from "styled-components";

export default function Button ({value}){
    return (
        <Wrapper>{value}</Wrapper>
    )
}
const Wrapper = styled.button`
background-color: #A328D6;
width: 87vw;
height: 46px;
font-size: 20px;
font-weight: 700;
color: white;
display: flex;
justify-content: center;
align-items: center;
border: none;
cursor: pointer;
`
import styled from "styled-components";

export default function Input({ placeholder, type, value, disabled, ...otherProps }) {    
    return (
        <Wrapper
            required
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            type={type}           
            {...otherProps} />
    )
}

const Wrapper = styled.input`
    width: 87vw;
    height: 58px;
    margin-bottom: 13px;
    font-size: 20px;
    border-radius: 5px;  
    padding: 17px;
    border: none;
`
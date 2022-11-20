import styled from "styled-components";

export default function Input({ type, placeholder, value, onChange, disabled }) {
  return <InputStyle type={type} placeholder={`${placeholder}`} value={value} onChange={onChange} disabled={disabled}></InputStyle>;
}

const InputStyle = styled.input`
  width: 326px;
  height: 58px;
  border-radius: 5px;
  font-family: "Raleway";
  font-weight: 400;
  font-size: 20px;
  line-height: 23.48px;
  display: block;
  margin-bottom: 13px;
  ::placeholder{
    color: #000000;
    opacity: 1;
  }
  &:disabled{
    filter: brightness(0.8);
  }
`;
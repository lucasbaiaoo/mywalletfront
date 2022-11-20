import styled from "styled-components";
import loading from "../assets/images/loading.svg"

export default function Button1({ text, disabled }) {
  return <Button1Style disabled={disabled}>{disabled ? <img src={loading} alt=""/> : `${text}`}</Button1Style>;
}

const Button1Style = styled.button`
  width: 326px;
  height: 46px;
  border: none;
  border-radius: 5px;
  background-color: #A328D6;
  font-family: "Raleway";
  font-weight: 700;
  font-size: 20px;
  line-height: 23.48px;
  color: #ffffff;
  margin-bottom: 36px;
  cursor: pointer;
  &:disabled{
    cursor: default;
    opacity:0.7;
  }
  img{
    width: 45px;
    height: 45px;

  }
`;
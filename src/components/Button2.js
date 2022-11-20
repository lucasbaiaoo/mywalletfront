import styled from "styled-components";
import loading from "../assets/images/loading.svg"

export default function Button2({ text }) {
  return <Button2Style>{text}</Button2Style>;
}

const Button2Style = styled.button`
  width: 155px;
  height: 114px;
  border: none;
  border-radius: 5px;
  background-color: #A328D6;
  font-family: "Raleway";
  font-weight: 700;
  font-size: 17px;
  line-height: 19.98px;
  color: #ffffff;
  cursor: pointer;
`;
import styled from "styled-components";

export default function Button2({ icon, text }) {
  return <Button2Style>
    {icon}
    {text}
    </Button2Style>;
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
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 11px;
  padding-left: 10px;
  ion-icon{
    font-size: 30px;
    margin-top: 11px
  }
  cursor: pointer;
`;
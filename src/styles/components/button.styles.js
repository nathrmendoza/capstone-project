import styled from "styled-components";

export const BaseButton = styled.button`
  text-decoration: none;
  display: inline-block;
  padding: 5px 10px;
  font-family: 'Segoe UI';
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.15s ease-out;
  text-align: center;
`

export const DefaultButton = styled(BaseButton)`
  border: 3px solid #000;
  background: #fff;
  color: #000;
  &:hover {
    background: #000;
    color: #fff;
  }
`

export const InvertedButton = styled(BaseButton)`
  border: 3px solid #000;
  background: #000;
  color: #fff;
  &:hover {
    background: #fff;
    color: #000;
  }
`
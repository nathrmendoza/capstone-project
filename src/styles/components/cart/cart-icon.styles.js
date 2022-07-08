import styled from "styled-components";

export const CartIconWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  svg {
    width: 48px;
    height: auto;
    pointer-events: none;
  }
`

export const CartCount = styled.span`
  pointer-events: none; 
  font-size: 13px;
  position: absolute;
  top: 13px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
`
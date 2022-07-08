import styled from "styled-components";


export const CartDropdownWrapper = styled.div`
  position: absolute;
  z-index: 99;
  right: 0;
  top: 100%;
  width: 240px;
  height: 320px;
  background-color: #fff;
  border: 3px solid #000;
  padding: 15px;
  .default-btn {
    width: 100%;
    margin-top: 10px;
  }
`

export const CartItemsWrapper = styled.div`
  height: calc(100% - 46px);
`
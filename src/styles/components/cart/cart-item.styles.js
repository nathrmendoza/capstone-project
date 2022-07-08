import styled from "styled-components"
import {Heading6} from '../../common/typography.styles'

export const CartItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  margin-bottom: 12px;
`

export const ImageWrapper = styled.aside`
  img {
    display: block;
    width: 64px;
    height: 64px;
  }
`

export const ContentWrapper = styled.article`
    width: calc(100% - 64px);
    padding-left: 12px;
`

export const ItemName = styled(Heading6)`
  display: block;
  margin: 0;
`

export const QuanPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SmallText = styled.span`
  font-size: 12px;
  display: block;
  max-width: 50%;
  &.quantity {
    font-weight: bold;
  }
`
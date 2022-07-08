import styled from "styled-components";
import { Heading3 } from "../common/typography.styles";

export const CellBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ececec;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: transform 0.5s ease-out;
`

export const CellDescription = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  opacity: 0;
  transition: opacity 0.5s ease-out;
`

export const CategoryCell = styled.div`
  position: relative;
  overflow: hidden;
  padding-bottom: 100%;
  grid-column-end: span 2;
  &:nth-child(3) {
    grid-row-end: span 2;
  }
  &:nth-child(4) {
    grid-column-end: span 4;
    padding-bottom: 56.25%;
  }
  &:nth-child(5) {
    grid-column-end: span 3;
    padding-bottom: 56.25%;
  }
  &:nth-child(6) {
    grid-column-end: span 3;
    padding-bottom: 56.25%;
  }
  &:hover ${CellBackground} {
    transition: transform 2s cubic-bezier(.47,1.64,.41,.8);
    transform: scale(1.15);
  }
    
  &:hover ${CellDescription} {
    opacity: 1;
  }
`
export const CategoryName = styled(Heading3)`
  color: #ffffff;
  text-transform: uppercase;
`
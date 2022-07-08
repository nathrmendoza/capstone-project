import styled from "styled-components";

export const CategoryListingWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-gap: 20px;
`
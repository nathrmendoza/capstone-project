import React from 'react'

import {CategoryCell, CategoryName, CellBackground, CellDescription} from '../styles/components/category-item.styles'

const CategoryListingItem = ({props}) => {
    const {title, imageUrl} = props
    
    return (
      <CategoryCell>
          <CellBackground style={{backgroundImage: `url(${imageUrl})`}}></CellBackground>
          <CellDescription>
            <CategoryName>{title}</CategoryName>
          </CellDescription>
      </CategoryCell>
    )
}

export default CategoryListingItem
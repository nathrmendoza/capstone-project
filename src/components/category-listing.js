import React from 'react'
import { CategoryListingWrapper } from '../styles/components/category-listing.styles'

import CategoryListingItem from './category-listing-item'

const CategoryListing = ({categories}) => {
  
    return (
      <CategoryListingWrapper>
        {categories.map((e, index) => <CategoryListingItem key={index} props={e} />)}
      </CategoryListingWrapper>
    );
}

export default CategoryListing
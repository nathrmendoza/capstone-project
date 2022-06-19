import React from 'react'
import CategoryListingItem from './category-listing-item'
import '../styles/components/categories-listing.scss'

const CategoryListing = ({categories}) => {
  
    return (
      <div className="App">
        <div className="categories-listing">
        {categories.map((e, index) => <CategoryListingItem key={index} props={e} />)}
        </div>
      </div>
    );
}

export default CategoryListing
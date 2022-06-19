import React from 'react'
import '../styles/components/category-listing-item.scss'

const CategoryListingItem = ({props}) => {
    const {title, imageUrl} = props
    
    return (
        <div className="category-cell">
          <div className="cell-background" style={{backgroundImage: `url(${imageUrl})`}}></div>
          <div className="cell-description">
            <h3>{title}</h3>
          </div>
        </div>
    )
}

export default CategoryListingItem
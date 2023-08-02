import React from 'react'
import ShopCard from './ShopCard'

const CardsView = ({ items }) => {
  return (
    <div className='product-wrapper'>
        {items.map((item, index) => (
            <ShopCard 
            key = {index}
            {...item}
            />))
        }
    </div>
  )
}

export default CardsView;


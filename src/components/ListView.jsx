import React from 'react'
import ShopItem from './ShopItem'

const ListView = ({ items }) => {
  return (
    <div className='products-wrapper'>
        {items.map((item, index) =>(
            <ShopItem
            key={index}
            {...item}
        />))
        }
    </div>
  )
}

export default ListView;

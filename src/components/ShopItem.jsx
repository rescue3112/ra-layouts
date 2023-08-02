import React from 'react'

const ShopItem = ({ name, price, color, img}) => {
  return (
    <div className='card-view'>
        <div className='card-product-view'>
            <img src={img} alt='card' />
        </div>
        <div className='card-title-view'>
            <h2>{name}</h2>
        </div>
        <div className='card-color'>{color}</div>
        <div className='card-product-price'>${price}</div>
        <button className='addto-card'>Add to cart</button>
    </div>
  )
}

export default ShopItem;

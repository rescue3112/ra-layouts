import React from 'react'

const ShopCard = ({ name, price, color, img}) => {
    return (
        <div className='card'>
            <div className='card-title'>
                <h2>{name}</h2>
            </div>
            <div className='card-color1'>{color}</div>
            <div className='card-product-image'>
                <img src={img} alt='card'/>
            </div>
            <div className='card-price-and-button'>
                <div className='card-product-price'>${price}</div>
                <button className='addto-card'>Add to cart</button>
            </div>
        </div>
    )
}

export default ShopCard;

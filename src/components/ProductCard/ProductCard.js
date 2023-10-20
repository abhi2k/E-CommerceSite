import React from 'react'
import './ProductCard.scss'

export default function ProductCard({ product }) {
    return (
        <div className='product-card-component'>
            <img src={product.img} className='product-image' alt='not available' />
            <div className='product-details'>
                <div className='name-price'>
                    <div className='product-name'>{product.name}</div>
                    <div className='product-price'> ${product.price}</div></div> 
                <div className='product-category'>{product.category}</div>
                <div className='product-description'>{product.description}</div>
            </div>
        </div>
    )
}

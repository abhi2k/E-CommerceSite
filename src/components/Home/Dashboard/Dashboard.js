import React from 'react'
import './Dashboard.scss'
import { productsData } from '../../CommonFunctions/productData'
import ProductCard from './ProductCard/ProductCard'

export default function Dashboard() {
    return (
        <div className='dashboard-component'>
            <div className='search-section'>
                <input type='text' className='search-text-field' placeholder='Type to search for products'/>
            </div>
            <div className='content-section'>
            {productsData.map((product, index) => {
                return <ProductCard key={index} product={product} />
            })}

            </div>
        </div>
    )
}

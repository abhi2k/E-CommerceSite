import React from 'react'
import './Dashboard.scss'
import { productsData } from '../../CommonFunctions/productData'
import ProductCard from './ProductCard/ProductCard'

export default function Dashboard() {
    return (
        <div className='dashboard-component'>
            {productsData.map((product, index) => {
                return <ProductCard key={index} product={product} />
            })}
        </div>
    )
}

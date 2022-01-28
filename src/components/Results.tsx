import React from 'react';

import Products from '../interfaces/Products';
import LoadingSign from './LoadingSign';

import ProductsList from './ProductList';
 

export default function Results({ products, loadingSign }: { products: Array<Products>, loadingSign: boolean }) {
    return (
        <div className="results-container">

            {loadingSign && <LoadingSign/>}

            {(products && !loadingSign) && <ProductsList products={products}/>}

        </div>
    )
}

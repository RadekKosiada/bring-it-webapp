import React from 'react';

import formatPrice from '../helpers/formatPrice';

import Products from '../interfaces/Products';

export default function Results({ products }: { products: Array<Products> }) {
    return (
        <div className="results-container">
            <p className="results-sum">Ergebnisse: {products.length}</p>
            {products && products.map((product) => {
                return (
                    <div
                        className="product-container"
                        key={product.sku}>

                        <img
                            src={product.image ? product.image :
                                'https://via.placeholder.com/50'}
                            alt={`image of ${product.name}`}
                        />
                        <div className="product-details">
                            <p>{product.name}</p>
                            <p>{`${formatPrice(product.price, 2)} €`}</p>
                            <p>{product.packing}</p>
                            <p>
                                {product.basePrice > 0 && <span>{product.basePrice}€ / </span>}
                                {product.baseUnit !== '0' && <span>{product.baseUnit}</span>}
                            </p>

                        </div>
                        <hr />
                    </div>

                )
            })}
        </div>
    )
}

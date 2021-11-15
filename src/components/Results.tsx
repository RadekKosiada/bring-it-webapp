import React from 'react';

import formatPrice from '../helpers/formatPrice';


interface Products {
    sku: string;
    name: string;
    image: string;
    packing: string;
    price: number;
    basePrice: number;
    baseUnit: string;
};

export default function Results({ products }: { products: Array<Products> }) {
    return (
        <div>
            <p>Ergebnisse: {products.length}</p>
            {products && products.map((product) => {
                return (
                    <div key={product.sku}>
                        <p>{product.name}</p>
                        <p>{`${formatPrice(product.price, 2)} €`}</p>
                        <p>{product.packing}</p>
                        <p>
                            {product.basePrice && <span>{product.basePrice} / </span>}
                            {product.baseUnit && <span>{product.baseUnit}</span>}
                        </p>
                        <img
                            src={product.image ? product.image :
                                'https://via.placeholder.com/50'}
                            alt={`image of ${product.name}`}
                        />
                    </div>

                )
            })}
        </div>
    )
}

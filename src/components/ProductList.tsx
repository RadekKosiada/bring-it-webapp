import React from 'react';

import Products from '../interfaces/Products';

import formatPrice from '../helpers/formatPrice';

function ProductsList({ products }: { products: Array<Products> }) {

  return (
    <div>
      <p className="results-sum">Ergebnisse: {products.length}</p>
      {products && products.map((product) => {
        return (
          <div
            className="product-container"
            key={product.sku}>

            <img
              src={product.image ? `${product.image}?imwidth=110` :
                'https://via.placeholder.com/50'}
              alt={product.name}
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

export default ProductsList;



import React from 'react'
import products from '../products'
import Product from '../components/Product'

const Home = () => {
  return (
    <>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Home

import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'

const Home = () => {
  return (
    <>
      <Row>
        {products.map(product => (
          <Col sm={12} md={6} lg={3} xlg={4} key={product.id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home

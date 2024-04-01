import React from 'react'
import Product_tab from './Product_tab'

const Product_des = () => {
  return (
    <section className='product_des py-'>
      <div className="lg:container mx-auto">
        <div className="row flex flex-wrap">
          <Product_tab/>
        </div>
      </div>
    </section>
  )
}

export default Product_des


import watch from '../images/watch.jpg';

import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>   
        <Meta title={"Your Cart"} />  
        <BreadCrumb title='Your cart' />  
        <section className="cart-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-header py-3 d-flex justify-content-between align-items-center">
							<h4 className='cart-col-1'>Product</h4>
							<h4 className='cart-col-2'>Price</h4>
							<h4 className='cart-col-3'>Quantity</h4>
							<h4 className='cart-col-4'>Total</h4>
                        </div>
                        <div className="cart-data py-3 d-flex justify-content-between align-items-center">
							<div className='cart-col-1 gap-15 d-flex align-items-center'>
								<div className='w-25'>
									<img src={ watch } className='img-fluid' alt="product" />
								</div>
								<div className='w-75'>
									<p className="title">Something something</p>
									<p className="color">This color</p>
									<p className="size">This size</p>
								</div>
							</div>
							<div className='cart-col-2'>
								<h5 className="price">$100</h5>
							</div>
							<div className='cart-col-3 d-flex align-items-center gap-10'>
								<div>
									<input type="number" className='form-control' min={1} max={100} />
								</div>
								<div>
									<AiFillDelete className='text-danger' />
								</div>
							</div>
							<div className='cart-col-4'>
								<h5 className="price">$100</h5>
							</div>
                        </div>
                    </div>
					<div className="col-12 py-2 mt-4">
						<div className="d-flex justify-content-between align-items-baseline">
							<Link to='/product' className="button">
								Back to store
							</Link>
							<div className='d-flex flex-column align-items-end'>
								<h4>Subtotal: $100</h4>
								<p>Taxes and shipping fee is calculated at checkout</p>
								<Link to='/checkout' className="button">
									Checkout
								</Link>
							</div>
						</div>

					</div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Cart

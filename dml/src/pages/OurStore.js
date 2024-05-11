import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const OurStore = () => {
  return <>
    <Meta title='Our Store'></Meta>
    <BreadCrumb title='Our Store' />
    <div className='store-wrapper py-5 home-wrapper-2'>
      <div className="container-xxl">
        <div className="row">
            <div className="col-3">
                <div className="filter-card mb-3">
                    <h3 className="filter-title">
                        Categories
                    </h3>
                    <div>
                        <ul className='ps-0'>
                            <li>Watch</li>
                            <li>TV</li>
                            <li>Camera</li>
                            <li>Laptop</li>
                        </ul>
                    </div>
                </div>
                <div className="filter-card mb-3">
                    <h3 className="filter-title">
                        Filter
                    </h3>
                    <div>
                        <h5 className="sub-title">Availability</h5>
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                value="" 
                                id="" 
                            />
                            <label className="form-check-label" htmlFor=""> 
                                In stock
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id=""
                            />
                            <label className="form-check-label" htmlFor=""> 
                                Out of stock
                            </label>
                        </div>
                        <h5 className="sub-title">Price</h5>
                        <div className='d-flex align-items-center gap-10'>
                            <div class="form-floating mb-3">
                                <input 
                                    type="email" 
                                    class="form-control" 
                                    id="floatingInput" 
                                    placeholder="From"
                                />
                                <label for="floatingInput">From</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input 
                                    type="email" 
                                    class="form-control" 
                                    id="floatingInput1" 
                                    placeholder="To"
                                />
                                <label for="floatingInput1">To</label>
                            </div>
                        </div>
                        <h5 className="sub-title">Color</h5>
                        <div>
                            <ul className='color ps-0'>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <h5 className="sub-title">Size</h5>
                    </div>
                </div>
                <div className="filter-card mb-3">
                    <h3 className="filter-title">
                        Product tags
                    </h3>
                </div>
                <div className="filter-card mb-3">
                    <h3 className="filter-title">
                        Recommendation
                    </h3>
                </div>
            </div>
            <div className="col-9"></div>
        </div>
      </div>
    </div>
  </>
}

export default OurStore

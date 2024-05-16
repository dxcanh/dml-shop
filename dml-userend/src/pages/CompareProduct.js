import React from 'react'
import Breadcrumb from "../components/BreadCrumb";
import Meta from "../components/Meta"; 
import Color from '../components/Color';
import ProductCompareCard from '../components/ProductCompareCard';

const CompareProduct = () => {
  return <>
    <Meta title={"Compare Products"} />
    <Breadcrumb title="Compare Products" />
    <div className='compare-product-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
            <div className="row">
                <ProductCompareCard />
                <ProductCompareCard />
                <ProductCompareCard />
                <ProductCompareCard />
            </div>
        </div>
    </div>
  </>
}

export default CompareProduct


import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'

const Home = () => {
  return <>
    <section className="home-wrapper-1 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img 
                src="images/main-banner-1.jpg" 
                className='img-fluid rounded-3' 
                alt="main banner" 
              />
              <div className="main-banner-content position-absolute ">
                <h4>SUPERCHARGE FOR PROs.</h4>
                <h5>iPhone 15 Pro</h5>
                <p>From $999.00 <br/> or $41.62/mo. for 24 mo.</p>
                <Link className='button'>BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
              <div className="small-banner position-relative">
                <img 
                  src="images/catbanner-01.jpg" 
                  className='img-fluid rounded-3' 
                  alt="main banner" 
                />
                <div className="small-banner-content position-absolute ">
                  <h4>BEST SELLER</h4>
                  <h5>Xiaomi Pro X</h5>
                  <p>From $1016.16 <br/> or $42.35/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img 
                  src="images/catbanner-02.jpg" 
                  className='img-fluid rounded-3' 
                  alt="main banner" 
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEWEST PRODUCT</h4>
                  <h5>Apple Watch 2</h5>
                  <p>Browse to update <br /> latest styles and colors</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img 
                  src="images/catbanner-03.jpg" 
                  className='img-fluid rounded-3' 
                  alt="main banner" 
                />
                <div className="small-banner-content position-absolute ">
                  <h4>ON SALE</h4>
                  <h5>iPad Pro</h5>
                  <p>From $799 <br/> or $46.40/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img 
                  src="images/catbanner-04.jpg" 
                  className='img-fluid rounded-3' 
                  alt="main banner" 
                />
                <div className="small-banner-content position-absolute ">
                  <h4>SPECIAL DEAL</h4>
                  <h5>AirPods Max</h5>
                  <p>Free engraving for <br /> high-fidelity headphones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              <div className='d-flex align-items-center gap-15'>
                <img src="images/service.png" alt="services" />
                <div>
                  <h6>Free shipping</h6>
                  <p className='mb-0'>For orders over $20</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src="images/service-02.png" alt="services" />
                <div>
                  <h6>Surprise offers weekly</h6>
                  <p className='mb-0'>Save up to 25%</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src="images/service-03.png" alt="services" />
                <div>
                  <h6>24/7 support</h6>
                  <p className='mb-0'>Shop with an expert</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src="images/service-04.png" alt="services" />
                <div>
                  <h6>Affordable products</h6>
                  <p className='mb-0'>Get factory direct price</p>
                </div>
              </div>
              <div className='d-flex align-items-center gap-15'>
                <img src="images/service-05.png" alt="services" />
                <div>
                  <h6>Secure payments</h6>
                  <p className='mb-0'>100% protected payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between align-items-center flex-wrap">
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart TVs</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Speakers</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/speaker.jpg" alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Accesories</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart TVs</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Smart watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/speaker.jpg" alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                <div>
                  <h6>Accesories</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="featured-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Featured Collection
            </h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
    <section className="famous-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="/images/famous-01.png" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Big screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="/images/famous-02.png" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Smart speaker</h5>
                <h6 className='text-dark'>HomePod mini</h6>
                <p className='text-dark'>From $99 only</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="/images/famous-03.png" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Studio display</h5>
                <h6 className='text-dark'>Macbook Air 2022</h6>
                <p className='text-dark'>From $1099 or $45.80/mo. for 24 mo. </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="/images/famous-04.png" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Excellent performance</h5>
                <h6 className='text-dark'>iPhone 15 Pro</h6>
                <p className='text-dark'>From $999 or $41.62/mo. for 24 mo. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="special-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </div>
    </section>
    <section className="popular-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Bestsellers
            </h3>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-2">
            <div className="card"></div>
          </div>
          <div className="col-2">
            <div className="card"></div>
          </div> */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
    <section className="marquee-wrapper py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner card-wrapper">
              {/* <Marquee>
                I can be a React component, multiple React components, or just some text.
              </Marquee> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="blog-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Latest Blogs
            </h3>
          </div>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  </>
}

export default Home

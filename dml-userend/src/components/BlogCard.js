import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className="col-3">
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" className='img-fluid' alt="blog" />
            </div>
            <div className="blog-content">
                <p className='date'>
                    22 Mar, 2024
                </p>
                <h5 className='title'> 
                    New era with Apple Vision Pro
                </h5>
                <p className="desc">
                    This is about Apple Vision Pro - a computer within your vision.
                </p>
                <Link className='button' to='/'>
                    READ MORE
                </Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard

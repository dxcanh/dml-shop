

import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

const Signup = () => {
    return <>
    <Meta title='Register'></Meta>
    <BreadCrumb title='Create Account' />
    <div className="login-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className='text-center mb-3'>Create your account</h3>
                    <form action="" className='d-flex flex-column gap-15'>
                        <div>
                            <input 
                                type="text" 
                                name='firstname' 
                                className='form-control'
                                placeholder='First Name' />
                        </div>
                        <div className='mt-1'>
                            <input 
                                type="text" 
                                name='lastname' 
                                className='form-control'
                                placeholder='Last Name' />
                        </div>
                        <div className='mt-1'>
                            <input 
                                type="email" 
                                name='email' 
                                className='form-control'
                                placeholder='Email' />
                        </div>
                        <div className='mt-1'>
                            <input 
                                type="password" 
                                name='password' 
                                className='form-control'
                                placeholder='Password' />
                        </div>
                        <div>
                            <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                <button className="button border-0">Create</button>
                                <Link className="button signup">Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </>
}

export default Signup

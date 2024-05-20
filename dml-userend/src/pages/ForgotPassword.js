

import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return <>
    <Meta title='Reset Password'></Meta>
    <BreadCrumb title='Account' />
    <div className="login-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className='text-center mb-3'>Reset your password</h3>
                    <p className='text-center mt-2 mb-3'>
                        We will send you an email before you reset your password
                    </p>
                    <form action="" className='d-flex flex-column gap-15'>
                        <div>
                            <input 
                                type="email" 
                                name='email' 
                                className='form-control'
                                placeholder='Email' />
                        </div>
                        <div>
                            <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                                <Link to='../reset-password' className="button border-0 text-white" type='submit'>Confirm</Link>
                                <Link to='../login' className='underline-link'>Cancel </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </>
}

export default ForgotPassword

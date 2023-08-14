// modules and Liabrary
import React from 'react'
//for changing page
import { Link, useNavigate } from "react-router-dom"
//for validation messages or error toasts
import toast, { Toaster } from "react-hot-toast"
//input get and validation
import { useFormik } from 'formik'
//
// css
import "./Signup.css"
// layouts or components
import Footer from '../../../Layouts/footer/Footer'
import axios from 'axios'


const Signup = () => {
  const specialChar = /.*[\!\@\#\$\%\^\&\*\(\)\[\]\{\}\|\;\:\'\"\,\.\<\>\/\?\~\`\_\-\=\+].*/;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: 'xyz@gmail.com',
      username: 'ImaginaryName',
      password: ''
    },

    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: async (values) => {
      //making sure if password length is greater than 
      if (values.password.length < 8) {
        toast.error('Password must be 8 chracter long');
        return;
      }
      //special character
      else if (!specialChar.test(values.password)) {
        toast.error('Password must contain at least one special character');
      }

      //atleat one lowercase
      else if (!uppercaseRegex.test(values.password)) {
        toast.error('Password must contain at least one uppercase and one lowercase character');
        return;
      }
      else if (!lowercaseRegex.test(values.password)) {
        toast.error('Password must contain at least one uppercase and one lowercase character');
        return;
      }
      ///email field
      else if (values.email === "") {
        toast.error('kindly fill the email field');
      }
      else if (values.username === "") {
        toast.error('Kindly fill the Username field');
      }
      else if (values.username.length < 5) {
        toast.error("Username must be at least 6 characters long ");
        return;
      }

 const api=axios.create({
  baseURL: "http://localhost:3001"
 })
      // register promise pending
      const Register=async()=>{
        try{
          const response=await api.post("/api/v1/register",{
            username:values.username,
            email:values.email,
            password:values.password,

          })
          return response.data
        }
        catch(err){
       throw(err)
        }
      }
      toast.promise(Register(),{
        loading: "Creating Account",
        success: <b>Account Created Successfully</b>,
        error: <b>Error While creating account</b>,
        
      })

    }
  })
  return (
    <div>
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className="main_wrapper">
      <Link to="/" className="login-logo">
          <img alt="company" src="./logo.svg" />
        </Link>
        <form onSubmit={formik.handleSubmit} method='post' className='form_wrapper'>
          <p className='signup_txt'>Create Account</p>

          <input {...formik.getFieldProps('username')} className='signup_email' type="text" placeholder='Enter Name' />
          <input {...formik.getFieldProps('email')} className='signup_email' type="email" placeholder='Enter Email' />
          <input {...formik.getFieldProps('password')} className='signup_email' type="password" placeholder='Enter Password' />
          <input {...formik.getFieldProps('password')} className='signup_email' type="password" placeholder='Repeat Password' />
          <button type='submit' className='registerBtn'>Register</button>

          <Link to="/login">Login Instead....</Link>
        </form>
      </div>
      <Footer MarginTop="0vmax" />
    </div>
  )
}

export default Signup
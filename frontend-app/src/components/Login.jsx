import React, { useState } from 'react'
import "./Login.css"

const Login = () => {
  const [form,setForm] =useState({
    name: '',
    password: ''
  })
  const HandleLogin=()=>{
    event.preventDefault();

    console.log("login submit")
    console.log(form)
  }
  return (
    <div className='container offset-md-3' >
      <form className='p-4 m-4 w-50 border  ' onSubmit={HandleLogin}>
        <div>
           <h2 className='text-center'>Welcome Back!!</h2>
        </div>
        <div className='mt-4 '>
          <label className='form-label'>Enter your email</label>
          <input className='form-control' type='email' value={form.name}  onChange={e=>
            setForm({
              ...form,
              name:e.target.value
            })}/>
        
        </div>
        <div className='mt-4 '>
           <label className='form-label'>Enter your password</label>
           <input className='form-control' type='password' value={form.password} onChange={e=>
            setForm({
              ...form,
              password:e.target.value
            })}/>
        
        </div>
         <button className=' mt-4 btn btn-primary col-md-6 offset-md-3' type='submit'>Login</button>


      </form>
  
      
    </div>
  )
}

export default Login

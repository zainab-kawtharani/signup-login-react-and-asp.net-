import React, { useState } from 'react'

const Registration = () => {
  const[form,setForm] = useState({
    name:'',
    email:'',
    password:''
  })
  const HandleRegistration=()=>{
    event.preventDefault();
    console.log(form)
  }
  return (
    <div className='container offset-md-3'>
      <form className='p-4 m-4 w-50 border' onSubmit={HandleRegistration}> 
        <div>
          <h2 className='text-center'>Welcome Dear, lets make a quick Registration</h2>
        </div>
        <div className='mt-4 '>
          <label className='form-label'>Enter your name</label>
          <input className='form-control' type='name' value={form.name} 
          onChange={e=>{
            setForm({
              ...form,
              name:e.target.value
            })
           }}/>
           
        
        </div>
        <div className='mt-4 '>
           <label className='form-label'>Enter your email</label>
           <input className='form-control' type='email' value={form.email}  onChange={e=>{
            setForm({
              ...form,
              email:e.target.value
            })
           }}/>
        
        </div>
        <div className='mt-4 '>
           <label className='form-label'>Enter your password</label>
           <input className='form-control' type='password' value={form.password}
           onChange={e=>{
            setForm({
              ...form,
              password:e.target.value
            })
           }} />
        
        </div>
        <button className='mt-4 btn btn-primary col-lg-6 offset-md-3' type='submit'>Signin</button>
      </form>
    </div>
  )
}

export default Registration;

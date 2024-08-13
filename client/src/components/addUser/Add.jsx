import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './add.css'
import toast from "react-hot-toast"
const Add = () => {
  
  const users = {
    fname : "",
    lname : "",
    email : "",
    passowrd : ""
  }

  const [user, setUser] = useState(users);
  const navigate = useNavigate();
  const inputHandaler = (e) => {
      const {name, value} = e.target;
      setUser({...user, [name]: value});
      
  }

  const submitForm = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8000/api/user", user)
      .then((response) => {
        toast.success(response.data.msg, {position: "top-right"})
        navigate("/")
      })
      .catch(err => console.log(err))
  }
  
  return (
    <div className='add'>
      <Link to={'/'} className='addUser'>Back</Link>
      <h1>Add new user</h1>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First name</label>
          <input onChange={inputHandaler} type='text' id='fname' name='fname' autoComplete='off' placeholder='First name' />
          <label htmlFor="lname">Last name</label>
          <input onChange={inputHandaler} type='text' id='lname' name='lname' autoComplete='off' placeholder='Last name' />
          <label htmlFor="emai">Email</label>
          <input onChange={inputHandaler} type='email' id='email' name='email' autoComplete='off' placeholder='Email' />
          <label htmlFor="password">Password</label>
          <input onChange={inputHandaler} type='password' id='password' name='password' autoComplete='off' placeholder='Password' />
          <button type="submit" className="addButton">Submit</button>

        </div>
      </form>
    </div>
  )
}

export default Add
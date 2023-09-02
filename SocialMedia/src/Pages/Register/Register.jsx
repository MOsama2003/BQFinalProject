import { useState } from "react";
import "./register.scss";
import {Link} from "react-router-dom"
import axios from "axios"
export default function Register() {
  const [input, setInput] = useState({
    username:"",
    email:"",
    password:"",
    name:""
  })
  const [err, setErr] = useState(null);
  const handleChange = (e) =>{
    setInput((pre)=>({...pre, [e.target.name]: e.target.value}))
  }
  console.log(input)
  const handleClick = async (e) =>{
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/api/auth/register",input)
    } catch (err) {
      setErr(err.response.data);
      //console.log(err)
    }
  }
  return (
    <div>
      <div className="loginPage">
        <div className="card">
          <div className="right">
            <h1>Register</h1>
            <form action="">
              <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
              <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
              <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
              <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
              {err && <p>{err}</p>}
              <button onClick={handleClick}>Register</button>
            </form>
          </div>
          <div className="Left">
            <h1 className="h1">BanoQabil Alumni</h1>
            <p>
              Lorem ipsum dolor sit,
              corrupti error provident. Lorem ipsum dolor sit amet adipisicing elit. Totam, molestiae. Lorem, ipsum dolor.
            </p>
            <span>Do you have an account?</span>
            <Link to="/login">
              <button>Login</button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useContext, useState} from "react";
import "./login.scss";
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
export default function Login() {
  const {login} = useContext(AuthContext)
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div>
      <div className="loginPage">
        <div className="card">
          <div className="left">
            <h1>Hello World!</h1>
            <p>
              Lorem ipsum dolor sit,
              corrupti error provident. Lorem ipsum dolor sit amet adipisicing elit. Totam, molestiae. Lorem, ipsum dolor.
            </p>
            <span>Don't you have an account?</span>
            <Link to="/register">
              <button>Register</button>
              </Link>
          </div>
          <div className="right">
            <h1>Login</h1>
            <form action="">
              <input type="text" placeholder="Username" name="username"
              onChange={handleChange}/>
              <input type="password" placeholder="Password" name="password"
              onChange={handleChange}/>
               {err && err}
              <button onClick={handlelogin}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

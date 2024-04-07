import { Link, useLocation, useNavigate } from "react-router-dom";
import Nav from "../../Shared/Navber/Nav";
 
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {

const {logIn, googleLogin} = useContext(AuthContext)

const location = useLocation()
console.log(location)
const navigate = useNavigate()

const handleLogin = (e) => {
e.preventDefault(); 
const form = new FormData(e.currentTarget);
const email = form.get("email");
const password = form.get("password"); 

console.log(email, password) 

logIn(email, password)
.then(result => {
navigate(location?.state ? location.state : "/")
})
.catch(error => console.log(error.message))

}

const handleGoogleLogin = (e) => {
  e.preventDefault()
  googleLogin()
  .then(result => {
    navigate(location?.state ? location.state : "/")
  })
}



    return (
        <div>
           <Nav></Nav>
           <h2 className="text-3xl my-10 text-center">Please Login</h2> 

           <form className="md:w-3/4 lg:w-1/2 mx-auto " onSubmit={handleLogin}>

           <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name= "password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="flex items-center my-5 gap-5">
            <div><p>Login With</p></div>
            <div className="cursor-pointer"><FaGoogle onClick={handleGoogleLogin} size={30}></FaGoogle></div>
            <div className="cursor-pointer"><FaGithub size={30}></FaGithub></div>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>

           </form>

           <p className="text-center mt-4">Do not have an account? <Link to="/register" className="text-blue-500 font-bold">Register</Link></p>
        </div>
    );
};

export default Login;
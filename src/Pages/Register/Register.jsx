/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Nav from "../../Shared/Navber/Nav";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";




const Register = () => {
    const {createUser, setUser} = useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password"); 
        
        console.log(email, password) 


        createUser(email, password)
        .then(result => setUser(result.user))
        .catch(error => console.log(error.message))
        }


    return (
        <div>
           <Nav></Nav>
           <h2 className="text-3xl my-10 text-center">Please Register</h2> 

           <form className="md:w-3/4 lg:w-1/2 mx-auto " onSubmit={handleRegister}>

           <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
        </div>
           <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
        </div>
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>

           </form>

           <p className="text-center mt-4">Already have an account?<Link to="/login" className="text-blue-500 font-bold">Login</Link></p>
        </div>

    );
};

export default Register;
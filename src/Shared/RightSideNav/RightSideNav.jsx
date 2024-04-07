import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import qzone1 from '../../assets/qZone1.png';
import qzone2 from '../../assets/qZone2.png';
import qzone3 from '../../assets/qZone3.png';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const RightSideNav = () => {



const {googleLogin, setUser} = useContext(AuthContext)



const handleGoogle = (e) => {
    e.preventDefault(); 
    googleLogin()
    .then(result => {
        setUser(result.user)
        
    })
    .catch(error => console.log(error.message))

} 

    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
            <h2 className="text-2xl">Login With</h2>
            <button onClick={handleGoogle} className="btn btn-outline w-full">
                <FaGoogle />
                Google
            </button>
            <button className="btn btn-outline w-full">
                <FaGithub />
                Github
            </button>
        </div>

        <div className="p-4  mb-6">
            <h2 className="text-2xl mb-4">Find Us
             on</h2>
           <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
           <FaFacebook className="mr-2" />
           <span>Facebook</span>
           </a>

           <a className="p-4 flex text-lg items-center border border-x" href="">
           <FaTwitter className="mr-2" />
           <span>Twitter</span>
           </a>

           <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
           <FaInstagram className="mr-2" />
           <span>Instagram</span>
           </a>

        </div>

            {/* q zone  */}

            <div className="p-4 space-y-3 mb-6">
            <h2 className="text-2xl">Q zone</h2>
           <img src={qzone1} alt="" />
           <img src={qzone2} alt="" />
           <img src={qzone3} alt="" />

        </div>

        </div>
    );
};

export default RightSideNav;
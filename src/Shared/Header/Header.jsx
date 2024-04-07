import moment from "moment"
import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <div className="text-center">
            <img className="mx-auto" src={logo} alt="" />
            <p>Journalism without fear or favor</p>
            <p className="text-">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;
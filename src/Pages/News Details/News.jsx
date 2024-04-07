import { useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import Nav from "../../Shared/Navber/Nav";

const News = () => {

    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Nav></Nav> 
            <div className="grid grid-cols-4">
<div className="col-span-3">
    <h2 className="text-2xl">News Details</h2>
    <p>{id}</p>
</div>

<div>
    <RightSideNav></RightSideNav>
</div>
            </div>
        </div>
    );
};

export default News;
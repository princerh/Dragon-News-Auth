import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import Nav from "../../Shared/Navber/Nav";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {


const news = useLoaderData()
// console.log(news)

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Nav></Nav>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                <div>
<LeftSideNav ></LeftSideNav>
                </div>

                <div className="md:col-span-2">
{
    news.map(anews => <NewsCard key={anews.id} news={anews}></NewsCard>)
}
                </div>

                <div>
<RightSideNav></RightSideNav>
                </div>


            </div>
        </div>
    );
};

export default Home;
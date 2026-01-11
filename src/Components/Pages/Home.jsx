
import { Outlet } from "react-router";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
        </div>
    );
};

export default Home;
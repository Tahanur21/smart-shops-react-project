
import { Outlet, useLoaderData } from "react-router";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner/>
            <div className="max-w-7xl mx-auto py-10">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
              <Categories data={data}/>
              <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Home;
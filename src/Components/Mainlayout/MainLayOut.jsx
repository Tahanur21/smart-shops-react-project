import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const MainLayOut = () => {
    return (
        <div>
            {/* navBar */}
            <NavBar/>
            <div>
            {/* outlet */}
            <Outlet/>
            </div>
            {/* footer */}
            <Footer/>
        </div>
    );
};

export default MainLayOut;
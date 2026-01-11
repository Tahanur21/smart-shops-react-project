import { Outlet, useLocation } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const MainLayOut = () => {
     const location = useLocation();
  const loacationPath = location.pathname;
    return (
        <div>
            {/* navBar */}
            <div className={
                loacationPath === '/' ?
                'mt-4 px-3' : ''

            }>
            <NavBar/>
            </div>
            <div>
            {/* outlet */}
            <div className="px-3 min-h-[calc(100vh-300px)]">
            <Outlet/>
            </div>
            </div>
            {/* footer */}
            <Footer/>
        </div>
    );
};

export default MainLayOut;
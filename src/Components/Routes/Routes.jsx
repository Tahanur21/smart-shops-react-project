import { createBrowserRouter } from "react-router"
import MainLayOut from "../Mainlayout/MainLayOut"
import ErrorPage from "../ErrorPage/ErrorPage"
import Home from "../Pages/Home"

const routes = createBrowserRouter([
  {
    path: '/',
    Component: MainLayOut,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: '/',
            Component: Home,
        }
    ]
  }
])

export default routes
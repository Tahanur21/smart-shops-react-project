import { createBrowserRouter } from "react-router"
import MainLayOut from "../Mainlayout/MainLayOut"
import ErrorPage from "../ErrorPage/ErrorPage"
import Home from "../Pages/Home"
import Statistics from "../Pages/Statistics"
import Dashboard from "../Pages/Dashboard"
import Categories from "../Categories/Categories"

const routes = createBrowserRouter([
  {
    path: '/',
    Component: MainLayOut,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: '/',
            Component: Home,
        },
        {
          path: '/statistics',
          Component: Statistics,
        },
        {
          path: '/dashboard',
          Component: Dashboard,
        }
    ]
  }
])

export default routes
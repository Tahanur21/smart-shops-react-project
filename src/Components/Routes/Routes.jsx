import { createBrowserRouter } from "react-router"
import MainLayOut from "../Mainlayout/MainLayOut"
import ErrorPage from "../ErrorPage/ErrorPage"
import Home from "../Pages/Home"
import Statistics from "../Pages/Statistics"
import Dashboard from "../Pages/Dashboard"
import Categories from "../Categories/Categories"
import Cards from "../Categories/Cards"
import ErrorHandle from "../ErrorHandle/ErrorHandle"

const routes = createBrowserRouter([
  {
    path: '/',
    Component: MainLayOut,
    errorElement: <ErrorPage/>,
    children: [
        {
            path: '/',
            Component: Home,
            loader: ()=> fetch('../../../public/category.json'),
            children: [
              {
                path: '/',
                Component: Cards,
                loader: ()=> fetch('../../../public/products.json')
              },
               {
                path: '/cards/:id',
                Component: Cards,
                loader: ()=> fetch('../../../public/products.json')
              }
            ]
        },
        {
          path: '/statistics',
          Component: Statistics,
        },
        {
          path: '/dashboard',
          Component: Dashboard,
        },
        {
          path: '/errorHandle',
          Component: ErrorHandle,
        }
    ]
  }
])

export default routes
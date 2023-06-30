import {useRoutes, BrowserRouter} from "react-router-dom"
import { ShoppingCartProvider } from "../../Context/Context"
import Home from "../Home/home"
import MyAccount from "../MyAccount/MyAccount"
import MyOrder from "../MyOrder/MyOrder"
import MyOrders from "../MyOrders/MyOrders"
import NotFound from "../NotFound/NotFound"
import SignIn from "../Signin/Signin"
import Navbar from "../../Components/Navbar"
import Layout from "../../Components/Layout"
import CheckOutSideMenu from "../../Components/CheckOutSideMenu"
const AppRoutes = () => {
  let routes = useRoutes([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/clothes",
      element:<Home/>
    },
    {
      path:"/electronics",
      element:<Home/>
    },
    {
      path:"/furnitures",
      element:<Home/>
    },
    {
      path:"/toys",
      element:<Home/>
    },
    {
      path:"/others",
      element:<Home/>
    },
    {
      path:"/my-account",
      element:<MyAccount/>
    },
    {
      path:"/my-order",
      element:<MyOrder/>
    },
    {
      path:"/my-orders",
      element:<MyOrders/>
    },
    {
      path:"/my-orders/last",
      element:<MyOrder/>
    },
    {
      path:"/my-orders/:id",
      element:<MyOrder/>
    },
    {
      path:"/*",
      element:<NotFound/>
    },
    {
      path:"/sign-in",
      element:<SignIn/>
    },
  ])

  return routes
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutes/>
          <Navbar/>
          <CheckOutSideMenu/>
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App

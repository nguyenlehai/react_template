import { lazy } from "react"
import { BrowserRouter } from "react-router-dom"

const Home = lazy(() => import("./Home"))
const Login = lazy(() => import("./Login"))

const Screens = () => (
  <BrowserRouter>
    <Home />
    <Login />
  </BrowserRouter>
)

export default Screens
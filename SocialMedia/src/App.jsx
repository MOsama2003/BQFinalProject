import './App.css'
import {createBrowserRouter, RouterProvider, Outlet, Navigate} from 'react-router-dom'
import Register from './Pages/Register/Register'
import Login from "./Pages/Login/Login.jsx"
import Navbar from './Components/Navbar/Navbar'
import Profile from './Pages/Profile/Profile'
import Leftbar from './Components/Leftbar/Leftbar'
import Rightbar from './Components/Rightbar/Rightbar'
import Home from './Pages/Home/Home'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { DarkModeContext } from './context/darkmodeContext'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
function App() {
  const {currentUser} = useContext(AuthContext);
  const {darkMode} = useContext(DarkModeContext)
  console.log(darkMode)
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }
    return children;
  }
  const queryClient = new QueryClient();
  const Layout = () =>{
    return(
      <QueryClientProvider client={queryClient}>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <Navbar/>
      <div style={{display: "flex"}}>
        <Leftbar/>
        <Outlet/>
        <Rightbar/>
      </div>
      </div>
      </QueryClientProvider>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout/></ProtectedRoute>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/profile/:id",
          element: <Profile/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App


import './App.css'
import {  RouterProvider, createBrowserRouter } from "react-router-dom"
import LandingPage from './Pages/LandingPage/LandingPage'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import FocalCompany from './Pages/FocalCompany/FocalCompany'
import IramCompany from './Pages/IramCompany/IramCompany'
import Code95Company from './Pages/Code95Company/Code95Company'

function App() {
  const Routing = createBrowserRouter([
      {path: "/" , element: <LandingPage/>  } ,
      {path:"/Company1" , element: <FocalCompany/> },
      {path:"/Company2" , element: <IramCompany/> },
      {path:"/Company3" , element: <Code95Company/> },
      // {path:"/Company4" , element: <Company4/> },
      // {path:"/Company5" , element: <Company5/> },
      // {path:"/Company6" , element: <Company6/> },
      {path:"/login" , element: <Login/>} ,
      {path:"/signup" , element: <SignUp/> } ,
  ])
  return (
    <RouterProvider router={Routing}>
    <LandingPage/>
    </RouterProvider>
  )
}

export default App

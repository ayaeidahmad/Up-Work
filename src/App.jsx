
import './App.css'
import {  RouterProvider, createBrowserRouter } from "react-router-dom"
import LandingPage from './Pages/LandingPage/LandingPage'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import FocalCompany from './Pages/FocalCompany/FocalCompany'
import IramCompany from './Pages/IramCompany/IramCompany'
import Code95Company from './Pages/Code95Company/Code95Company'
import VicaCompany from './Pages/VicaCompany/VicaCompany'
import InfoStrategicCompany from './Pages/InfoStrategicCompany/InfoStrategicCompany'
import IdeaToLifeCompany from './Pages/IdeaToLifeCompany/IdeaToLifeCompany'
// import DashBordManager from './Pages/DashBordManager/DashBordManager'
// import JobCard from './Components/JobCard/JobCard'
// import ArticleDash from './Pages/ArticleDash/ArticleDash'
// import CvsDash from './Pages/CvsDash/CvsDash'
// import { Children } from 'react'
// import { JobsDash } from './Pages/JobsDash/JobsDash'
function App() {
  const Routing = createBrowserRouter([
      {path: "/" , element: <LandingPage/> } ,
      {path: "/landingPage" , element: <LandingPage/>  } ,
      {path:"/Company1" , element: <FocalCompany/> },
      {path:"/Company2" , element: <IramCompany/> },
      {path:"/Company3" , element: <Code95Company/> },
      {path:"/Company4" , element: <VicaCompany/> },
      {path:"/Company5" , element: <InfoStrategicCompany/> },
      {path:"/Company6" , element: <IdeaToLifeCompany/> },
      {path:"/login" , element: <Login/>} ,
      {path:"/signup" , element: <SignUp/> } ,
      // {path: "/Dashboard" , element : <DashBordManager/> } ,
      // {path : "/jobs" , element  :<JobsDash/>} ,
      // {path : "/articles" , element  :<ArticleDash/>} ,
      // {path : "/cvs" , element  :<CvsDash/>} ,
      // {path : "/forgotpassword" , element  :<Login page={"forgotPassword"}/>} ,
  ])
  return (
    <RouterProvider router={Routing}>
    <LandingPage/>
    </RouterProvider>
  )
}

export default App

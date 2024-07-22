
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

function App() {
  const Routing = createBrowserRouter([
      {path: "/" , element: <LandingPage/> , children : [
        // {path: "/landingPage/popupAddReviews" , element : <}
      ] } ,
      {path: "/landingPage" , element: <LandingPage/>  } ,
      {path:"/Company1" , element: <FocalCompany/> },
      {path:"/Company2" , element: <IramCompany/> },
      {path:"/Company3" , element: <Code95Company/> },
      {path:"/Company4" , element: <VicaCompany/> },
      {path:"/Company5" , element: <InfoStrategicCompany/> },
      {path:"/Company6" , element: <IdeaToLifeCompany/> },
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

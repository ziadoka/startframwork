import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contact from './componant/Contact/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router';
import About from './componant/About/About.jsx';
import Layout from './componant/Layout/Layout.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './componant/Home/Home.jsx';
import Portfolio from './componant/Portfolio/Portfolio';


const routing =createBrowserRouter([
  

  {path:"",element:<Layout/>,children:[
    {index:true,element:<Home/>},

    {path:"about",element:<About/>},
    {path:"contact",element:<Contact/>},
    {path:"portfolio",element:<Portfolio/>}

  ]}
])

createRoot(document.getElementById('root')).render(
<>


  <RouterProvider router={routing}></RouterProvider>
  </>
)

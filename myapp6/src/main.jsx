import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './about.jsx'
import Error from './error.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

const route = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
       
    },
    {
        path: "/about",
        element: <About/>
    },
    {
       path: "/home",
       element: <App/>
    },
    {
        path: "*",
        element: <Error/>
    }
    


   
])



createRoot(document.getElementById('root')).render(

   <RouterProvider router={route}/>
 
)

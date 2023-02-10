import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

// import all components
import Username  from './components/Username';
import Password from './components/Password';
import Profile from './components/Profile';
import Register from './components/Register';
import Reset from './components/Reset';
import Recovery from './components/Recovery';
import PageNotFound from './components/PageNotFound';


// Root router
const router = createBrowserRouter([
    {
        path: '/',
        element:<Username/>
    },
    {
        path: '/register',
        element:<Register/>
    },
    {
        path: '/password',
        element:<Password/>
    },
    {
        path: '/profile',
        element:<Profile/>
    },
    {
        path: '/recovery',
        element:<Recovery/>
    },
    {
        path: '/reset',
        element:<Reset/>
    },
    {
        path: '*',
        element:<PageNotFound/>
    }
])

const App = () => {
  return (
   <main>
    <RouterProvider router={router}></RouterProvider>
   </main>
  )
}

export default App

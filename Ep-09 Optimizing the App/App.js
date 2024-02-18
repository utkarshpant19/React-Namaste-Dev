// Structuring our App

/*
Header
    - Logo
    - Nav Links
Body
    - Search Box
    - Restaurant Container
        - Restaurant Cards
    
Footer
    - Copyright
    - Links
    - Address


*/
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import About from './Components/About';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import Error from './Components/Error';
import Contact from './Components/Contact';
import RestaurantMenu from './Components/RestaurantMenu';

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet /> {/* Routes to children of AppLayout */}
    </div>
  );

  // Header
  // Body
  // Footer
};

const Grocery = lazy(()=> import('./Components/Grocery'));

const appRouter = createBrowserRouter ([
    {path: '/', element: <AppLayout />,
    children: [
      {
        path: '/', element: <Body/>
      },
      {
        path: '/about', element: <About/>
      },
      {
        path: '/contact', element: <Contact/>
      },
      {
        path: '/grocery', element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
      },
      {
        path: '/restaurant/:resId', element: <RestaurantMenu/>
      }

    ],
     errorElement: <Error />},
    
  ]);

const root = ReactDOM.createRoot (document.getElementById ('root'));
root.render (<RouterProvider router={appRouter} />);

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
import React from 'react';
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
        path: '/restaurant/:resId', element: <RestaurantMenu/>
      }

    ],
     errorElement: <Error />},
    
  ]);

const root = ReactDOM.createRoot (document.getElementById ('root'));
root.render (<RouterProvider router={appRouter} />);

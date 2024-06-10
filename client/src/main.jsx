import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './routes/Root.jsx';
import Home from './routes/Home.jsx';
import Contractors from './routes/Contractors.jsx';
import SignupPage from './routes/SignupPage';
import AuthPage from './routes/AuthPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path:'/home',
        element: <Home/>,
      },
      { path: '/auth',
        element: <AuthPage /> },
      {
        path: '/',
        element: <SignupPage />,
      },
      {
        path: '/contractors',
        element: <Contractors />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

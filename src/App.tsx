import React from 'react';
import MainLayout from './components/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import OpportunitiesPage from './Pages/OpportunitiesPage';
import LoginPage from './Pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <OpportunitiesPage /> },
      { path: 'opportunities', element: <OpportunitiesPage /> },
      { path: 'login', element: <LoginPage /> },

    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};

export default App;

/* eslint-disable no-unused-vars */
import React from 'react'
import "./App.css"
import Home from './pages/Home'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Intro from './pages/Intro';
import Project from './pages/Project';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import { Routes,Route } from 'react-router-dom'

const App = () => {
  // const router = createBrowserRouter([
  //     {
  //       path: "/",
  //       element: <Home />,
  //     },
  //     {
  //       path: "/intro",
  //       element: <Intro />,
  //     },
      // {
      //   path: "/project",
      //   element: <Project />,
      // },
      // {
      //   path: "/experience",
      //   element: <Experience />,
      // },
      // {
      //   path: "/contact",
      //   element: <Contact />,
      // },
    // ]);
  return (
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/intro' element={<Intro/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>

  )
}

export default App

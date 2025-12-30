import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import "./firebase";
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Home from './Home.jsx'
import Contact from "./Contact.jsx";
import Login from "./Login.jsx";
import Admin from "./Admin.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "projects", element: <Projects /> },
        { path: "contact", element: <Contact /> },
        { path: "login", element: <Login /> },
        { path: "admin", element: <Admin /> },
      ],
    },
  ],
  {
    basename: "/Web-Development-/",
  }
);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

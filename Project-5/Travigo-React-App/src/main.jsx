import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Explore from "./Pages/Explore/Explore.jsx";
import Price from "./Pages/Price/Price.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="Home" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Explore" element={<Explore />} />
      <Route path="Pricing" element={<Price />} />
      <Route path="Contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

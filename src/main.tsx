import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import { createRoot } from "react-dom/client";
import About from "./components/About.tsx";
import CustomerTestimonials from "./components/CustomerTestimonials.tsx";
import Shop from "./components/Shop.tsx";
import { StrictMode } from "react";
import Layout from "./Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <About /> }, 
      { path: "about", element: <About /> },
      { path: "customer-testimonials", element: <CustomerTestimonials /> },
      { path: "shop", element: <Shop /> },
    ],
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

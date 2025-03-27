import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import CartPage from "./pages/CartPage.jsx";
import { ProductsProvider } from "./components/ProductsProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductsProvider>
      <RouterProvider router={router}></RouterProvider>
    </ProductsProvider>
  </StrictMode>
);

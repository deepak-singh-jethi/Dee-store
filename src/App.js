import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./LayoutPage/RootPage/Root";
import HomeLayout from "./LayoutPage/HomePage/Home";
import ShopLayout from "./LayoutPage/ShopPage/Shop";
import AboutLayout from "./LayoutPage/AboutPage/About";
import CartLayout from "./LayoutPage/CartPage/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      errorElement={<h1>Page not Found..</h1>}>
      <Route index element={<HomeLayout />} />
      <Route path="shop" element={<ShopLayout />} />

      <Route path="about" element={<AboutLayout />} />
      <Route path="cart" element={<CartLayout />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

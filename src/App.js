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
import ProfileLayout from "./LayoutPage/ProfilePage/Profile";
import AboutLayout from "./LayoutPage/AboutPage/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      errorElement={<h1>Page not Found..</h1>}>
      <Route index element={<HomeLayout />} />
      <Route path="shop" element={<ShopLayout />} />
      <Route path="profile" element={<ProfileLayout />} />
      <Route path="about" element={<AboutLayout />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

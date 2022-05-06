import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AddItem from "./Components/AddItem/AddItem";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ManageItems from "./Components/ManageItems/ManageItems";
import MyItems from "./Components/MyItems/MyItems";
import NotFound from "./Components/NotFound/NotFound";
import Registration from "./Components/Registration/Registration";
import ThankYou from "./Components/ThankYou/ThankYou";
import UpdateProduct from "./Components/UpdateProduct/UpdateProduct";
import RequireAuth from "./Hooks/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="manage-items"
          element={
            <RequireAuth>
              <ManageItems></ManageItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="update-product/:id"
          element={
            <RequireAuth>
              <UpdateProduct />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="add-item"
          element={
            <RequireAuth>
              <AddItem></AddItem>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="my-items"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Registration></Registration>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="thank-you" element={<ThankYou></ThankYou>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

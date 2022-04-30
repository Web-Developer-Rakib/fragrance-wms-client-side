import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Blogs from "./Blogs/Blogs";
import AddItem from "./Components/AddItem/AddItem";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ManageItems from "./Components/ManageItems/ManageItems";
import MyItems from "./Components/MyItems/MyItems";
import NotFound from "./Components/NotFound/NotFound";
import Registration from "./Components/Registration/Registration";
import ThankYou from "./Components/ThankYou/ThankYou";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="manage-items"
          element={<ManageItems></ManageItems>}
        ></Route>
        <Route path="add-item" element={<AddItem></AddItem>}></Route>
        <Route path="my-items" element={<MyItems></MyItems>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Registration></Registration>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="thank-you" element={<ThankYou></ThankYou>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

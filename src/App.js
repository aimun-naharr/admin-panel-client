import "./App.css";
import Home from "./Pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Single from "./Pages/single/Single";
import List from "./Pages/list/List";
import Login from "./Pages/login/Login";
import New from "./Pages/new/New";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='users'>
        <Route index element={<List/>}></Route>
        <Route path=":userId" element={<Single/>}></Route>
        <Route path="new" element={<New/>}></Route>
        </Route>
        <Route path='product'>
        <Route index element={<List/>}></Route>
        <Route path=":productId" element={<Single/>}></Route>
        <Route path="new" element={<New/>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

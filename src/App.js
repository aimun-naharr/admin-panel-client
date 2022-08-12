import "./App.css";
import Home from "./Pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Single from "./Pages/single/Single";
import List from "./Pages/list/List";
import Login from "./Pages/login/Login";
import New from "./Pages/new/New";
import { productInputs, userInputs } from "./formSource";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='users'>
        <Route index element={<List/>}></Route>
        <Route path=":userId" element={<Single/>}></Route>
        <Route path="new" element={<New inputs={userInputs} title="Add new user"/>}></Route>
        </Route>
        <Route path='products'>
        <Route index element={<List/>}></Route>
        <Route path=":productId" element={<Single/>}></Route>
        <Route path="new" element={<New inputs={productInputs} title="Add new product"/>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

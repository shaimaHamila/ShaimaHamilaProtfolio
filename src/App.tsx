import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
function App() {
  console.log(import.meta.env.VITE_ENVIRONMENT);
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("Admin") ? true : false);

  useEffect(() => {
    const token = localStorage.getItem("admin");
    setLoggedIn(token ? true : false);
  }, [loggedIn]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;

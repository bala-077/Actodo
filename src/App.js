import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import LandingPage from "./Pages/LandingPage";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      username: "bala",
      password: "12345"
    }
  ])
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login data={data} setData={setData}/>} />
            <Route path='/signup' element={<Signup data={data} setData={setData} />} />
            <Route path='/landing' element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App;

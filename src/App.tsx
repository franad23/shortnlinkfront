import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

//Pages
import Loginpage from './pages/LoginPage/Loginpage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Loginpage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

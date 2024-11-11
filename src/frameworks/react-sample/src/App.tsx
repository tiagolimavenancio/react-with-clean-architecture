import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "@pages/login";
import { Board } from "@pages/board";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "context/AuthContext";
import { Login } from "pages/login";
import { Board } from "pages/board";
import { ProtectedRoute } from "./ProtectedRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Board />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export { Router };

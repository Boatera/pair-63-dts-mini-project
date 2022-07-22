import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedComponent from "./component/ProtectedComponent";
import WatchPage from "./container/Watch";
import HomePage from "./container/Home";
import LoginPage from "./container/Login";
import RegisterPage from "./container/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route
          path="detail/:movieid"
          element={
            <ProtectedComponent>
              <WatchPage />
            </ProtectedComponent>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

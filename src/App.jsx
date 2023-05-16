import { Route, Routes } from "react-router";
import "./App.css";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/auth" Component={Auth} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;

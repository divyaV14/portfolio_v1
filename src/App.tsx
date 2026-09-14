import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Navbar from "./components/Navbar";

function App() {
  return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
         </Routes>
      </BrowserRouter>
  );
}

export default App;
import './styles/app.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

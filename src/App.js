import './styles/app.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainContainer from './containers/MainContainer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<MainContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

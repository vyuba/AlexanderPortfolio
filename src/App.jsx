import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Work from './pages/Work.jsx';
import About from './pages/About.jsx';
// import Loading from "./pages/Loading";

function App() {
  return (
    <div className="dark:bg-primary-dark bg-primary-light dark:text-text-dark px-5 pt-14">
     <BrowserRouter>
      <Routes>
            <Route index element={<Home />} />
            <Route path="/work" element={<Work/>} />
            <Route path="/about" element={<About/>}  />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

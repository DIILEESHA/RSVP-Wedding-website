import "./App.css";
import Home from "./components/Home/Home";
import Navigator from "./components/Navigator/Navigator";
import Audio from "./components/audioplayer/Audio";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigator />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

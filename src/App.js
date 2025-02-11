import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeItem from "./Components/AnimeItem";
import Homepage from "./Components/Homepage";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/anime/:id" element={<AnimeItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
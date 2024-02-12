import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Config from "./pages/Config";
import Sortition from "./components/Sortition/Sortition";

function App() {
  return (
    <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path='/' element={<Config />}/>
        <Route path='/sortition' element={<Sortition />}/>
      </Routes>
    </RecoilRoot>
  </BrowserRouter>
  );
}

export default App;

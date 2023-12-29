import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Mypage from './JS/Mypage';
import ChangeOTT from './JS/ChangeOTT';
import MyWrite from './JS/MyWrite';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mypage />} />
        <Route path="/ChangeOTT" element={<ChangeOTT />} />
        <Route path="/MyWrite" element={<MyWrite/>}/>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;

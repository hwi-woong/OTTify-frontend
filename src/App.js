import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from './JS/ScrollToTop';
import Mypage from './JS/Mypage';
import ChangeOTT from './JS/ChangeOTT';
import MyWrite from './JS/MyWrite';
import MyFavorite from './JS/MyFavorite';
import MyParticipate from './JS/MyParticipate';
import MyHost from './JS/MyHost';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Mypage />} />
          <Route path="/ChangeOTT" element={<ChangeOTT />} />
          <Route path="/MyWrite" element={<MyWrite/>}/>
          <Route path="/MyFavorite" element={<MyFavorite/>}/>
          <Route path="/MyParticipate" element={<MyParticipate/>}/>
          <Route path="/MyHost" element={<MyHost/>}/>
        </Routes>
      </ScrollToTop>
    </BrowserRouter> 
  );
}

export default App;

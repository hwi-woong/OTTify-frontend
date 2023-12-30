import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from './JS/ScrollToTop';
import Mypage from './JS/Mypage';
import ChangeOTT from './JS/ChangeOTT';
import MyWrite from './JS/MyWrite';
import MyFavorite from './JS/MyFavorite';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Mypage />} />
          <Route path="/ChangeOTT" element={<ChangeOTT />} />
          <Route path="/MyWrite" element={<MyWrite/>}/>
          <Route path="/MyFavorite" element={<MyFavorite/>}/>
        </Routes>
      </ScrollToTop>
    </BrowserRouter> 
  );
}

export default App;

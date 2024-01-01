import '../CSS/Nav.css'

import ottify from '../img/ottify.png';
import profile from '../img/사진.jpg';

const Nav = () =>{
  return (
    <nav className="navbar">
      <div className="nav-item">
        <img src={ottify} className='nav_logo' alt="Logo"/>
      </div>
      <div className="nav-item">
        <span className='nav_debate'>토론</span>
      </div>
      <div className="nav-item">
        <input type="text" className = "nav_search" placeholder="콘텐츠를 검색해보세요. (작품명, 태그, 감독, 배우, 유저)" />
      </div>
      <div className="nav-item">
        <img src={profile} className='nav_profile' alt="User"/>
      </div>
    </nav>
  )
}

export default Nav;
import { useNavigate } from "react-router-dom";
import '../App.css';
import '../CSS/Mypage.css'
import GradeGraph from './GradeGraph';
import PickButton from "./PickButton";
import img1 from '../img/사진.jpg';
import badge from '../img/profile_badge.png';
import ott from '../img/netflix.png';
import arrow from '../img/arrow.png';
import star from '../img/star.png';
import poster from '../img/poster.jpg';
import favorite from '../img/favorite.png';
import close from '../img/close.png';


const Mypage = () => {
  const navigate = useNavigate();
  const goToOTT = () => {
    navigate('/ChangeOTT');
  }
  
  const reviews = [0.5, 0.5, 1, 1.5, 2, 2, 2.5, 3, 4, 5]

  return (
    <div className = "Mypage">
      <div className = "my_profile">
        <img src = {img1} className = "profile_img"alt = "profile"></img>
        <div className='profile_bottom'>
          <div className = "profile_info">
            <div className='info_nickname'>
              <span className='name'>이임생</span>
              <img src = {badge} className='badge'></img>
            </div>
            <div className='info_email'>
              <span className='email'>leeeeemmmsanngg@naver.com</span>
            </div>
            <div className='info_edit'>
              <button className='edit_btn'>프로필 변경</button>
            </div>
          </div>

          <div className = "profile_ott">
            <div className='ott_subject'>
              <span className='ott_mine'>구독 중인 OTT</span>
            </div>
            <div className='ott_imgs'>
              <img src = {ott} className='ott_logo'></img>
              <img src = {ott} className='ott_logo'></img>
              <img src = {ott} className='ott_logo'></img>
              <img src = {arrow} className='arrow' onClick={goToOTT} alt = "화면 전환 화살표"></img>
            </div>
          </div>

          <div className='profile_grade'>
            <div className='grade_subject'>
              <span className='grade_mine'>내 리뷰 평균 평점</span>
              <div className='grade_num'>
                <img src = {star} className='grade_star'></img>
                <span className='grade_point'>3.75/5</span>
              </div>
            </div>
            <div className='grade_graph'>
              <GradeGraph reviews = {reviews}/>
            </div>
          </div>
        </div>
      </div>

      <div className='my_content'>
        <div className='content_div'>
          <div className='content_subject'>
            <span className='content_mine'>내 취향 장르</span>
            <select className='content_select' name = 'genre_1st'>
              <option selected disabled hidden>1순위 장르</option>
              <option value = "action">액션</option>
              <option value = "thriller">스릴러</option>
              <option value = "musical">뮤지컬</option>
              <option value = "comedy">코미디</option>
            </select>
          </div>

          <div className='content_pick' >
            <PickButton className='pick'>액션</PickButton>
            <PickButton className='pick'>스릴러</PickButton>
            <PickButton className='pick'>서스펜스</PickButton>
            <PickButton className='pick'>미스터리</PickButton>
            <PickButton className='pick'>로맨스</PickButton>
            <PickButton className='pick'>느와르</PickButton>
            <PickButton className='pick'>서부극</PickButton>
            <PickButton className='pick'>음악영화</PickButton>
            <PickButton className='pick'>뮤지컬</PickButton>
            <PickButton className='pick'>다큐멘터리</PickButton>
            <PickButton className='pick'>모큐멘터리</PickButton>
            <PickButton className='pick'>재난</PickButton>
            <PickButton className='pick'>블록버스터</PickButton>
            <PickButton className='pick'>스펙타클</PickButton>
            <PickButton className='pick'>시리즈</PickButton>
            <PickButton className='pick'>서사극</PickButton>
            <PickButton className='pick'>로맨틱코미디</PickButton>
            <PickButton className='pick'>코미디</PickButton>
            <PickButton className='pick'>음악영화</PickButton>
            <PickButton className='pick'>B급</PickButton>
            <PickButton className='pick'>모험</PickButton>
            <PickButton className='pick'>가족</PickButton>
          </div>

          <div className='content_like'>
            <span className='like_title'>보고싶어요</span>
            <div className='like_posters'>
              <div>
                <img src = {poster} className='poster_img_like'></img>
                <img src = {favorite} className='poster_favorite'></img>
              </div>
              <div>
                <img src = {poster} className='poster_img_like'></img>
                <img src = {favorite} className='poster_favorite'></img>
              </div>
              <div>
                <img src = {poster} className='poster_img_like'></img>
                <img src = {favorite} className='poster_favorite'></img>
              </div>
              <div>
                <img src = {poster} className='poster_img_like'></img>
                <img src = {favorite} className='poster_favorite'></img>
              </div>
              <div>
                <img src = {poster} className='poster_img_like'></img>
                <img src = {favorite} className='poster_favorite'></img>
              </div>
              <div>
                <img src = {poster} className='poster_img_like'></img>
                <img src = {favorite} className='poster_favorite'></img>
              </div>
              <div>
                <img src = {poster} className='poster_img_like'></img>
                <img src = {favorite} className='poster_favorite'></img>
              </div>
            </div>
          </div>

          <div className='content_hate'>
            <span className='hate_title'>관심없어요</span>
            <div className='hate_posters'>
              <div>
                <img src = {poster} className='poster_img_hate'></img>
                <img src = {close} className='poster_x'></img>
              </div>
              <div>
                <img src = {poster} className='poster_img_hate'></img>
                <img src = {close} className='poster_x'></img>
              </div>
              <div>
                <img src = {poster} className='poster_img_hate'></img>
                <img src = {close} className='poster_x'></img>
              </div>
              <div>
                <img src = {poster} className='poster_img_hate'></img>
                <img src = {close} className='poster_x'></img>
              </div>
              <div>
                <img src = {poster} className='poster_img_hate'></img>
                <img src = {close} className='poster_x'></img>
              </div>
              <div>
                <img src = {poster} className='poster_img_hate'></img>
                <img src = {close} className='poster_x'></img>
              </div>
              <div>
                <img src = {poster} className='poster_img_hate'></img>
                <img src = {close} className='poster_x'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mypage;
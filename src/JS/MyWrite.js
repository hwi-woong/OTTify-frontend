import ReviewList from './ReviewList';
import '../CSS/MyWrite.css'
import back from '../img/back.png';

const MyWrite = () =>{

  return (
    <div className = "mywrite_page">
      <div className = "mywrite_title">
        <img src = {back} className = "mywrite_back" alt = "뒤로 가기"/>
        <h2>내가 쓴 리뷰</h2>
      </div>
      <ReviewList/>
    </div>
  )
}

export default MyWrite;
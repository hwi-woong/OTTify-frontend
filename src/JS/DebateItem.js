import thumb from '../img/thumb_up.png';
import chat from '../img/chat.png';
const ReviewItem = ({debateTitle, movie, poster, content, created_date, comment, favorite, id}) =>{
  return (
    <div className = "DebateItem">
      <div className="debateInfo">
        <div className="movieInfo">
          <span className='movie'>{movie}</span>
          <span className="debateTitle">{debateTitle}</span>
        </div>
        <span className="writeDate">{created_date}</span>
      </div>

      <div className="debateMain">
        <img src = {poster.poster} className='debateImg'></img>
        <div className='reviewContent'>{content}</div>  
      </div>

      <div className='debateReaction'>
        <div className='debateFavorite'>
          <img src = {thumb} className='debatethumb' alt = "좋아요"></img>
          <span className='thumbNum'>{favorite}</span>
        </div>
        <div className='debateComment'>
          <img src = {chat} className='debatereply' alt = "댓글"></img>
          <span className='thumbNum'>{comment}</span>
        </div>
      </div>
    </div>
  )
}

export default ReviewItem;
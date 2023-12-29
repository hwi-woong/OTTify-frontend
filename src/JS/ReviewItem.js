const ReviewItem = ({author, content, created_date, evaluation, id}) =>{
  return (
    <div className = "ReviewItem">
      <div className = "info">
        <span>
          작성자: {author} | 감정점수: {evaluation}
        </span>
        <br/>
        <span className = "date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className = "content">{content}</div>
    </div>
  )
}

export default ReviewItem;
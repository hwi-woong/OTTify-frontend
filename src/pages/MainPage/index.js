//홈페이지
import React from "react";
import Row from "../../components/Row";
import requests from "../../api/requests";

export default function MainPage() {
  return (
    <div>
      {/* 넷플릭스 오리지널 시리즈를 보여주는 Row */}
      <Row
        title="인기차트"
        id="TR"
        fetchUrl={requests.fetchTopRated}
        isLargeRow
      />
<Row
  title="최신리뷰 한줄평"
  id="AM"
  fetchUrl={requests.fetchActionMovies}
  style={{
    borderRadius: '15px',
    background: 'var(--Gray-200, #E9ECEF)',
    width: '1124px',
    height: '298px',
    flexShrink: 0,
    
    // 추가적인 스타일 속성들을 필요에 따라 여기에 추가할 수 있습니다
  }}
/>

<Row
  title="당신의 인생작이 될 수도 있어요!"
  id="NO"
  fetchUrl={requests.fetchNetflixOriginals}
>
  <div style={{ fontSize: '12px', color: 'darkgray', marginTop: '5px' }}>
    (찜 50% + 별점 50%)
  </div>
</Row>

      {/* Movie Rankings */}
        <Row
        title="오늘의 트렌딩"
        id="TN"
        fetchUrl={requests.fetchTrending}
      />
    </div>
  );
}

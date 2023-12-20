import React, { useRef } from "react";
import "./MovieModal.css";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import Reviews from "./Reviews"; // Reviews 컴포넌트 import 추가
import Casts from "./Casts";
function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) {
  // ref 생성
  const ref = useRef();

  // 모달 외부를 클릭하면 모달을 닫도록 하는 custom hook 사용
  useOnClickOutside(ref, () => {
    setModalOpen(false);
  });

  return (
    <div className="presentation">
      <div className="wrapper-modal">
        {/* 모달 */}
        <div className="modal" ref={ref}>
          {/* 모달 닫기 버튼 */}
          <span onClick={() => setModalOpen(false)} className="modal-close">
            X
          </span>

          {/* 영화 포스터 */}
          <img
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="modal__poster-img"
          />

          {/* 영화 정보 */}
          <div className="modal__content">
            {/* 사용자에게 맞는 퍼센트 정보와 개봉일 */}
            <p className="modal__details">
              <span className="modal__user_perc"></span>{" "}
              {release_date ? release_date : first_air_date}
            </p>

            {/* 영화 제목 */}
            <h2 className="modal__title">{title ? title : name}</h2>

            {/* 평점과 영화 설명 */}
            <p className="modal__overview">⭐평점: {vote_average}</p>
            <p className="modal__overview">{overview}</p>
            <p className="modal__overview">
              {/* 추가된 코드 */}
              {overview}{" "}
              <span
                style={{
                  // 스타일링 부분...
                }}
                role="img"
                aria-label="시간가는줄 몰았어요"
              >
                ⏳ #시간가는줄_몰았어요
              </span>{" "}
              <span
                style={{
                  // 스타일링 부분...
                }}
                role="img"
                aria-label="오싹해요"
              >
                😱 #오싹해요
              </span>
            </p>

            {/* Reviews 컴포넌트 추가 */}
            <Reviews />
             {/* Casts 컴포넌트 추가 */}
             <Casts />
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;

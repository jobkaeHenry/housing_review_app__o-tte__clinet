import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import styled from "@emotion/styled";

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;

const ARRAY = [0, 1, 2, 3, 4];

const WriteReview = () => {
  // 평점 보내기
  const [reviewText, setReviewText] = useState("");
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]); //컨디마 컨디업

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
    // fetch('http://52.78.63.175:8000/movie', {
    //   method: 'POST',
    //   Headers: {
    //     Authroization: 'e7f59ef4b4900fe5aa839fcbe7c5ceb7',
    //   },
    //   body: JSON.stringify({
    //     movie_id:1
    //     star: score,
    //   }),
    // });
  };

  //post 보낼 객체
  const data = {
    cleanliness: 0,
    heating: 0,
    noise: 0,
    option: 0,
    crime: 0,
    sunlight: 0,
    reviewText: reviewText,
  };
  data.cleanliness = 1;
  console.log(data.cleanliness);

  // input onchange이벤트
  const onChangeText = (e) => {
    setReviewText(e.target.value);
  };

  return (
    <div className="writeReviewContainer">
      <div className="reviewStar">
        <ul>
          <li className="cleanliness">
            <label htmlFor="cleanliness">청결</label>
            벌레가 많이 나오거나 실내 위생은 어떠셨나요?
            <Stars>
              {ARRAY.map((el, idx) => {
                return (
                  <FaStar
                    key={idx}
                    size="50"
                    onClick={() => handleStarClick(el)}
                    className={clicked[el] && "yellowStar"}
                  />
                );
              })}
            </Stars>
          </li>
          <li className="heating">
            <label htmlFor="heating">냉/난방</label>
            온수나 난방은 어떠셧나요?
            <Stars>
              {ARRAY.map((el, idx) => {
                return (
                  <FaStar
                    key={idx}
                    size="50"
                    onClick={() => handleStarClick(el)}
                    className={clicked[el] && "yellowStar"}
                  />
                );
              })}
            </Stars>
          </li>
          <li className="noise">
            <label htmlFor="noise">소음</label>
            층간소음이나 외부소음은 어떠셨나요?
            <Stars>
              {ARRAY.map((el, idx) => {
                return (
                  <FaStar
                    key={idx}
                    size="50"
                    onClick={() => handleStarClick(el)}
                    className={clicked[el] && "yellowStar"}
                  />
                );
              })}
            </Stars>
          </li>
          <li className="option">
            <label htmlFor="option">옵션</label>
            냉장고,세탁기,에어컨 등 시설은 만족스러웠나요?
            <Stars>
              {ARRAY.map((el, idx) => {
                return (
                  <FaStar
                    key={idx}
                    size="50"
                    onClick={() => handleStarClick(el)}
                    className={clicked[el] && "yellowStar"}
                  />
                );
              })}
            </Stars>
          </li>
          <li className="crime">
            <label htmlFor="crime">방범</label>방 주변에서 살면서 위험한
            상황들은 없으셨나요?
            <Stars>
              {ARRAY.map((el, idx) => {
                return (
                  <FaStar
                    key={idx}
                    size="50"
                    onClick={() => handleStarClick(el)}
                    className={clicked[el] && "yellowStar"}
                  />
                );
              })}
            </Stars>
          </li>
          <li className="sunlight">
            <label htmlFor="sunlight">채광</label>
            햇빛은 잘 들어오나요?
            <Stars>
              {ARRAY.map((el, idx) => {
                return (
                  <FaStar
                    key={idx}
                    size="50"
                    onClick={() => handleStarClick(el)}
                    className={clicked[el] && "yellowStar"}
                  />
                );
              })}
            </Stars>
          </li>
        </ul>
      </div>
      <div className="reviewText">
        <label> 리뷰를 남겨주세요</label>
        <input type="text" onChange={onChangeText} value={reviewText || ""} />
      </div>
    </div>
  );
};

export default WriteReview;

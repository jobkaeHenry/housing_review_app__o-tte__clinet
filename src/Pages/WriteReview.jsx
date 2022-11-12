import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import styled from "@emotion/styled";
import { useRef } from "react";
import axios from "axios";

const Stars = styled.div`
  & svg {
    fill: gray;
    cursor: pointer;
  }

  :hover svg {
    fill: #fcc419;
  }

  & svg:hover ~ svg {
    fill: gray;
  }

  .yellowStar {
    fill: #fcc419;
  }
`;

const ARRAY = [0, 1, 2, 3, 4];

const WriteReview = () => {
  // 평점 보내기
  const [reviewText, setReviewText] = useState("");
  const [clicked1, setClicked1] = useState([false, false, false, false, false]);
  const [clicked2, setClicked2] = useState([false, false, false, false, false]);
  const [clicked3, setClicked3] = useState([false, false, false, false, false]);
  const [clicked4, setClicked4] = useState([false, false, false, false, false]);
  const [clicked5, setClicked5] = useState([false, false, false, false, false]);
  const [clicked6, setClicked6] = useState([false, false, false, false, false]);

  //post 보낼 객체
  let data = {
    cleanliness: 0,
    heating: 0,
    noise: 0,
    option: 0,
    crime: 0,
    sunlight: 0,
    reviewText: reviewText,
  };

  const handleStarClick1 = (index) => {
    let clickStates = [...clicked1];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked1(clickStates);
  };

  const handleStarClick2 = (index) => {
    let clickStates = [...clicked2];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked2(clickStates);
  };

  const handleStarClick3 = (index) => {
    let clickStates = [...clicked3];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked3(clickStates);
  };
  const handleStarClick4 = (index) => {
    let clickStates = [...clicked4];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked4(clickStates);
  };
  const handleStarClick5 = (index) => {
    let clickStates = [...clicked5];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked5(clickStates);
  };
  const handleStarClick6 = (index) => {
    let clickStates = [...clicked6];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked6(clickStates);
  };

  // score data에 넘기기
  const score1 = clicked1.filter(Boolean).length;
  const score2 = clicked2.filter(Boolean).length;
  const score3 = clicked3.filter(Boolean).length;
  const score4 = clicked4.filter(Boolean).length;
  const score5 = clicked5.filter(Boolean).length;
  const score6 = clicked6.filter(Boolean).length;

  // input onchange이벤트
  const onChangeText = (e) => {
    setReviewText(e.target.value);
  };

  // data에 평점 넣기
  data.cleanliness = score1;
  data.heating = score2;
  data.noise = score3;
  data.option = score4;
  data.crime = score5;
  data.sunlight = score6;

  console.log(data);

  const sendReview = () => {
    axios({
      method: "post",
      url: "/room",
      data: data,
    });
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
                    onClick={() => handleStarClick1(el)}
                    className={clicked1[el] && "yellowStar"}
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
                    onClick={() => handleStarClick2(el)}
                    className={clicked2[el] && "yellowStar"}
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
                    onClick={() => handleStarClick3(el)}
                    className={clicked3[el] && "yellowStar"}
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
                    onClick={() => handleStarClick4(el)}
                    className={clicked4[el] && "yellowStar"}
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
                    onClick={() => handleStarClick5(el)}
                    className={clicked5[el] && "yellowStar"}
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
                    onClick={() => handleStarClick6(el)}
                    className={clicked6[el] && "yellowStar"}
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
      <div className="submitBtn">
        <button onClick={sendReview}>제출하기</button>
      </div>
    </div>
  );
};

export default WriteReview;

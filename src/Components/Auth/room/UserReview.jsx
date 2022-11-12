import React from "react";
import userIcon from "../../../images/userIcon.webp";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import styled from "@emotion/styled";
import axios from "axios";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

const RatingText = styled.div`
  color: #787878;
  font-size: 12px;
  font-weight: 400;
`;

const UserImg = styled.div`
  img {
    width: 30px;
    height: 30px;
  }
`;

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
const Yellow = styled.span`
  color: #eab64d;
`;
const Gray = styled.span`
  color: var(--font-gray);
`;

const UserReview = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // axios로 리뷰받기
  const getReview = async () => {
    try {
      axios
        .get("/room/detail/1/review", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getReview();
  }, []);

  // 대기 중일 때 +  아직 posts 값이 설정되지 않았다면
  if (isLoading && !data) {
    return null;
  }
  let filledStar = "";
  let noStar = "";
  const ReviewStar = (starNum) => {
    console.log(starNum);

    for (let i = 0; i < starNum; i++) {
      filledStar += "★";
    }
    console.log(filledStar);
    for (let j = 0; j < 5 - starNum; j++) {
      noStar += "☆";
    }
    return (
      <>
        <Yellow>{filledStar}</Yellow>
        <Gray>{noStar}</Gray>
      </>
    );
  };

  // 비구조화 할당
  const { reviewStar, text, date } = data;
  // reviewStar 숫자대로 별표 표시하기

  // Date 시간단위로 변경해서 화면출력하기
  let ms = Date.parse(date); // 작성한 포스트 날짜 밀리초
  let today = Date.now(); // 현재시간 밀리초
  console.log(ms, today);
  const diff = today - ms;
  const diffTime = Math.floor(diff / 1000 / 60 / 60); // 시간
  const diffDay = Math.floor(diff / 1000 / 60 / 60 / 24); // 일
  const diffMonth = Math.floor(diff / 1000 / 60 / 60 / 24 / 30); // 월

  return (
    <div className="reviewContainer">
      <div className="userImg">
        <UserImg>
          <img src={userIcon} alt="사용자 이미지" />
        </UserImg>
      </div>
      <div className="userContent">
        <Stars>
          <div className="rating">{ReviewStar(reviewStar)}</div>
        </Stars>
        <RatingText>{text}</RatingText>
      </div>
      <div className="userDate">
        {diffTime < 24
          ? `${diffTime}시간 전`
          : diffTime > 24
          ? `${diffDay}일 전`
          : diffDay > 30
          ? `${diffMonth}달 전`
          : ` 몇년 전`}
      </div>
    </div>
  );
};

export default UserReview;

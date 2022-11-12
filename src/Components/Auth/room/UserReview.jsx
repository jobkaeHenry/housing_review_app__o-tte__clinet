import React from "react";
import userIcon from "../../../images/userIcon.webp";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import { ReviewStar } from "../../../Hooks/ReviewStar";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
`;

const RatingText = styled.div`
  color: #787878;
  font-weight: 400;
`;

const UserImg = styled.img`
  width: 30px;
  height: 30px;
`;

const Yellow = styled.span`
  color: #eab64d;
`;
const Gray = styled.span`
  color: var(--font-gray);
`;

const UserContainer = styled.div`
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid var(--line-light-gray);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ColumnWrapper = styled.div`
  display: flex;
  flex-flow: column;
`;
const RowWrapper = styled.div`
  display: flex;
  flex-flow: Row;
`;
const DateWrapper = styled.div`
  height: 100%;
  display: flex;
  align-self: flex-end;
`

const UserReview = ({ data }) => {
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

  return data !== null ? (
    <UserContainer>
      <RowWrapper >
        <UserImg src={userIcon} alt="사용자 이미지" className="mr-16"/>
        <ColumnWrapper>
          <ReviewStar starNum={reviewStar} />
          <RatingText>{text}</RatingText>
        </ColumnWrapper>
      </RowWrapper>
      <DateWrapper className="sub">
        {diffTime < 24
          ? `${diffTime}시간 전`
          : diffTime > 24
          ? `${diffDay}일 전`
          : diffDay > 30
          ? `${diffMonth}달 전`
          : ` 몇년 전`}
      </DateWrapper>
    </UserContainer>
  ) : null;
};

export default UserReview;

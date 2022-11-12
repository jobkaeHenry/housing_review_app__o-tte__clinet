// 의미없는 테스트용 함수입니다

import styled from "@emotion/styled";

function isOdd(elem) {
  return Boolean(elem % 2);
}

const Yellow = styled.span`
  color: #eab64d;
`;
const Gray = styled.span`
  color: var(--font-gray);
`;

export const ReviewStar = (starNum) => {
  console.log(starNum);
  let filledStar;
  let noStar;

  for (let i = 0; i < starNum; i++) {
    console.log(i);
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

export default isOdd;

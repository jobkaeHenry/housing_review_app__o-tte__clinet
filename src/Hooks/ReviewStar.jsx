import styled from "@emotion/styled";



const Yellow = styled.span`
  color: #eab64d;
`;
const Gray = styled.span`
  color: var(--line-gray);
`;


export const ReviewStar = ({starNum}) => {
    let filledStar = "";
    let noStar = "";
    console.log(starNum);
  
    for (let i = 0; i < starNum; i++) {
      filledStar += "★";
    }
    console.log(filledStar);
    for (let j = 0; j < 5 - starNum; j++) {
      noStar += "★";
    }
    return (
      <div>
        <Yellow>{filledStar}</Yellow>
        <Gray>{noStar}</Gray>
      </div>
    );
  };
  
import styled from "@emotion/styled";
import React from "react";

// 버튼앨리먼트
export const SigButton = styled.button`
  padding: 16px 0;
  background-color: var(--main);
  color: var(--pure-white);
  font-weight: var(--bold);
  text-align: center;
  min-width: 173px;
  border-radius: 16px 0 16px 0;
  cursor: pointer;
  &.ghost {
    color: var(--main);
    background-color: var(--pure-white);
    border: 2px solid var(--main);
  }
  &.disable {
    background-color: var(--line-gray);
    color: var(--pure-white);
  }
`;
export const SubText = styled.span`
  display: block;
  font-size: var(--sub-font-size);
`;

// 태그 앨리먼트
export const SigTag = styled.span`
padding: 2px 4px;
background-color: var(--main);
color: var(--pure-white);
font-weight: var(--sub);
text-align: center;
min-width: 33px;
border-radius: 4px 0px;
&.ghost{
  color: var(--pure-white);
  background-color: var(--line-gray);
}
&.active{
  color: var(--main);
  background-color: var(--pure-white);
  border: 1px solid var(--main);
}
&.disabled{
  color: var(--line-gray);
  background-color: var(--pure-white);
  border: 1px solid var(--line-gray);
}
`
// 이미지 랩퍼
const ImageElem = styled.img`
  width: ${(props) => (props.size ? props.size : "36")}px;
  height: ${(props) => (props.size ? props.size : "36")}px;
  background-color: var(--bg-gray);
  overflow: hidden;
  border-radius: 8px 0px;
  display: block;
  object-fit : cover;
  margin-right: 16px;
`;


export const ImageWrapper = ({ size = "36", src, alt }) => {
  return <ImageElem src={src} size={size} alt={alt} />;
};
// 아이콘 랩퍼


// 좋아요 카운트

const ViewCounterWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`;
export const IconElem = styled.img`
  width: ${(props) => (props.size ? props.size : "16")}px;
  height: ${(props) => (props.size ? props.size : "16")}px;
`;
const ViewCounterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:end;
`

export const ViewCounter = ({ view, like }) => {
  return (
    <ViewCounterWrapper>
      {view&&(
        <ViewCounterColumn className="text-align-center mr-16">
          <SubText className="medium font-gray">조회수</SubText>
          <SubText className="font-gray">{view}</SubText>
        </ViewCounterColumn>
      )}
      {like && (
        <ViewCounterColumn className="text-align-center mr-16">
          <SubText className="medium font-gray">찜</SubText>
          <SubText className="font-gray">{like}</SubText>
        </ViewCounterColumn>
      )}
    </ViewCounterWrapper>
  );
};


// ㄴㄴ
const GlobalComponents = () => {};

export default GlobalComponents;

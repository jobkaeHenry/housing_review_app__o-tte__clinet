import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const CardWrapper = styled.article`
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid var(--line-gray);
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ImageWrapper = styled.div`
  width: 100%;
  max-height: 320px;
  overflow: hidden;
  border-radius: 8px;
`;
const ImageElem = styled.img`
  width: 100%;
`;
const ColumnWrapper = styled.div``;
const RowWrapper = styled.div`
  display: flex;
`;
const Content = styled.span`
  margin-right: 16px;
`;

const HouseCard = ({ props }) => {
  console.log(props);
  return (
    <Link to={`/room/${props.roomId}`}>
      <CardWrapper>
        <ImageWrapper
          className="mb-10"
          src={props.image}
          alt={`${props.title} 의 대표사진`}
        >
          <ImageElem src={props.image} alt={`${props.title} 의 대표사진`} />
        </ImageWrapper>
        <div className="mt-16">
          <Content className="h4 bold">{props.title}</Content>
          <RowWrapper>
            <Content>{props.heatingType}</Content>
            <Content>{props.price}</Content>
            <Content>{props.roomType === "1" ? "원" : "투"}룸</Content>
          </RowWrapper>
        </div>
      </CardWrapper>
    </Link>
  );
};

export default HouseCard;

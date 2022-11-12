import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import UserReview from "../../Components/Auth/room/UserReview";
import axios from "axios";
import {
  ImageElem,
  ImageWrapper,
  RowWrapper,
} from "../../Components/Main/HouseCard";
import { ReviewStar } from "../../Hooks/ReviewStar";
import styled from "@emotion/styled";

const Centering = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;
const DistanceVisual = styled.div`
  width: 684px;
`;

const RoomDetail = () => {
  const [starData, setStarData] = useState(null);
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
          setStarData(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const getDetail = async () => {
    try {
      axios
        .get("/room/1", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          setIsLoading(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getReview();
    getDetail();
  }, []);
  return !isLoading ? (
    <>
      <Header title={data.name} />

      <ImageWrapper
        className="mb-10"
        src={data.images}
        alt={`${data.title} 의 대표사진`}
      >
        <ImageElem src={data.images} alt={`${data.name} 의 대표사진`} />
      </ImageWrapper>
      <Centering>
        <ReviewStar starNum={Math.floor(data.average)} />
        <RowWrapper>
          <sapn className="h4 bold">{data.average}</sapn>
          <span className="h4 gray"> / 5</span>
        </RowWrapper>
        
      </Centering>
      {starData.map((e) => {
        return <UserReview key={e.reviewID} data={e} />;
      })}
    </>
  ) : null;
};

export default RoomDetail;

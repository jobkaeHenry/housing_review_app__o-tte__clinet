import React, { useState,useEffect } from "react";
import Header from "../../Components/Header";
import UserReview from "../../Components/Auth/room/UserReview";
import axios from "axios";

const RoomDetail = () => {

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
            setIsLoading(false);
          });
      } catch (err) {
        console.log(err);
      }
    };
    useEffect(() => {
      getReview();
    }, []);
  return !isLoading?(
    <>
    <Header ></Header>
      <div>RoomDetail</div>
      <UserReview data={data}/>
    </>
  ):null;
};

export default RoomDetail;

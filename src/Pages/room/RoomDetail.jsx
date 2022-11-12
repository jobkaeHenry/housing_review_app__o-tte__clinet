import React, { useState,useEffect } from "react";
import Header from "../../Components/Header";
import UserReview from "../../Components/Auth/room/UserReview";
import axios from "axios";

const RoomDetail = () => {

    const [starData, setStarData] = useState(null);
    const [data,setData]=useState(null)
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
      getDetail()
    }, []);
  return !isLoading?(
    <>
    <Header ></Header>
      <div>RoomDetail</div>
      {starData.map((e)=>{
        return<UserReview key={e.reviewID} data={e}/>
      })}
      
    </>
  ):null;
};

export default RoomDetail;

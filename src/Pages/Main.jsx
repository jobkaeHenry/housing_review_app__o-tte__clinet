import axios from "axios";
import React, { useState,useEffect } from "react";
import HouseCard from "../Components/Main/HouseCard";
import MainTop from "../Components/Main/MainTop";

const Main = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("/room").then((res)=>{
      setData(res.data)
      setIsLoading(false)
    })
  }, [])
  

  return (
    <>
      <MainTop />
      {!isLoading ? (
        <>
          {data.map((e) => {
            return <HouseCard props={e} />;
          })}
        </>
      ) : null}
    </>
  );
};

export default Main;

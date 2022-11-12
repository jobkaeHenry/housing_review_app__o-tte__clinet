import React, { useState } from "react";
import HouseCard from "../Components/Main/HouseCard";
import MainTop from "../Components/Main/MainTop";

const Main = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();

  return (
    <>
      <MainTop />
      {data ? <HouseCard></HouseCard> : null}
    </>
  );
};

export default Main;

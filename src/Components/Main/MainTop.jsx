import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import FilterIcon from "../../images/filterIcon.svg"

const FilterWrapper = styled.div`
    width: 100%;
    height: 52px;
    padding: 16px;
`

const MainTop = () => {
  return (
    <>
    <FilterWrapper>
    < img src={FilterIcon} alt="filterIcon"/> <span className=""> 필터</span>
    </FilterWrapper>
    </>
  );
};

export default MainTop;

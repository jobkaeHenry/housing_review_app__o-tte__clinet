import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

const MainLeftWrapper = styled.aside`
  min-width: 164px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  background-color: #333;
  min-height: 600;
`;
export const MainCenterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 360px;
  max-width: 1024px;
  margin: 0 auto;
  background-color: var(--pure-white);
`;
export const MainRightWrapper = styled.aside`
  min-width: 298px;
  display: flex;
  flex-direction: column;
  min-height: 600px;
  background-color: #333;
`;
export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const SafeMargin = styled.div`
  width: 100%;
  height: 150px;
`;

export const MobileWrapper = () => {
  return (
    <MainCenterWrapper>
      <Outlet />
      <SafeMargin/>
    </MainCenterWrapper>
  );
};

export default MainLeftWrapper;

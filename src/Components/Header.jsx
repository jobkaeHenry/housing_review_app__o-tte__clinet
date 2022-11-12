import React from 'react'
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { IconElem } from './GlobalComponents';
import bookMarkIcon from '../images/bookMarkIcon.svg'
import leftArrowIcon from '../images/leftArrowIcon.svg'

const HeaderWrapper = styled.section`
  width: 100%;
  height: 52px;
  border-bottom: 1px solid var(--line-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  justify-content: space-between;
  align-items: center;
`;

const Header = ({title = "알려지지않은"}) => {
  return (
    <HeaderWrapper>
      <Link to={"/"}>
        <IconElem src={leftArrowIcon} size="18"/>
      </Link>
        <span className='h3 bold'>{title}</span>
        <IconElem src={bookMarkIcon} size="24"/>
    </HeaderWrapper>
  )
}

export default Header
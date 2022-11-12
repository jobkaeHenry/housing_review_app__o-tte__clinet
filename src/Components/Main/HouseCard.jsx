
import styled from '@emotion/styled'
import React from 'react'


const CardWrapper =styled.article`
    width: 100%;
    min-height: 360px;
    background-color: red;
    padding:16px;
`
const ImageWrapper =styled.img`
width: 100%;
`

const HouseCard = (props) => {
  return (
    <CardWrapper>
        <ImageWrapper src={props.image} alt={`${props.title} 의 대표사진`}/>
    </CardWrapper>
  )
}

export default HouseCard
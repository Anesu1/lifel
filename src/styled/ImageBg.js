import React from "react";
import styled from "styled-components";

function ImageBg({ children }) {
  return <ImageBgDiv img="./imgs/hit.jpg">{children}</ImageBgDiv>;
}

const ImageBgDiv = styled.div`
  height: 300px;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.33),
      rgba(0, 0, 0, 0.33)
    ),
    url("${(props) => props.img}");
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5%;
  p {
    font-family: ${(props) => props.theme.fam.robotob};
    font-weight: bold;
    font-size: 25px;
    line-height: 42px;
    text-align: center;
    color: #ffffff;
    @media(min-width:992px){
        width:38%;
    }
  }
  button {
    width: 50%;
    margin-top: 20px;
    height: 50px;
    background: ${(props) => props.theme.color.orange};
    color: #fff;
    border: none;
    font-family: ${(props) => props.theme.fam.robotob};
    font-weight: bold;
    font-size: 20px;
    line-height: 42px;
    &:focus{
      outline:0;
    }
    @media(min-width:992px){
        width:35%;
    }
  }
`;

export default ImageBg;

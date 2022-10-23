import React from "react";
import styled from "styled-components";
import Header from "./styled/Header";

function Banner() {
  return (
    <BannerSec img="./imgs/banner.jpg">
      <Header />
      <div className="banner-inner">
        <h1>
          Lifel is focusing exclusively in manufacturing of cost-effective and
          high quality products.{" "}
        </h1>
      </div>
    </BannerSec>
  );
}

const BannerSec = styled.section`
  height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.32),
      rgba(0, 0, 0, 0.32)
    ),
    url("${(props) => props.img}");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  position:relative;
  @media(min-width:768px){
        height:660px;
    }
    @media(min-width:1200px){
        height:100vh;
    }
  h1 {
    font-family: ${props => props.theme.fam.robotob};
    font-weight: 900;
    font-size: 30px;
    padding:5%;
    line-height: 45px;
    text-align: center;
    margin:0 auto;
    @media(min-width:768px){
        font-size: 40px;
        width:65%;
    }
  }
`;

export default Banner;

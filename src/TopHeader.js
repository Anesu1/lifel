import React from "react";
import styled from "styled-components";

function TopHeader() {
  return (
    <TopHeaderSec id="home">
      <img src="./imgs/logo.png" alt="" />
      <div className="number">
        <p>Tell: +263 242 707061.</p>
        <p>Cell: +263 772 338 950</p>
      </div>
      <div className="address">
        <p>Fidelity Life Towers </p>
        <p>5th Floor North Wing</p>
        <p>Cnr Raleigh Street & Kaguvi Street, Harare.</p>
      </div>
    </TopHeaderSec>
  );
}

const TopHeaderSec = styled.header`
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding:5%;
  @media(min-width:768px){
        padding:30px 5% ;
    }
  img {
    width:150px;
    @media(min-width:768px){
        
    }
    @media(min-width:992px){
        
    }
  }
  p {
    font-family: ${props => props.theme.fam.robotor};
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    @media(min-width:768px){
        font-size:17px;
    }
  }
  .number{
    flex:1;
    p{
      margin-left: auto;
    display: block;
    width: max-content;
    margin-right: 50px;
    }
  }
  .number,.address{
      display:none;
    @media(min-width:768px){
        display:unset;
    }
  }
`;

export default TopHeader;

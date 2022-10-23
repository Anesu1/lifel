import React, { useState } from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
  const [click, setClick] = useState(false);

  window.onscroll = () =>{
      setClick(false)
  } 


  return (
    <>
    <HeaderSec>
      
      <div
        className={click ? "hamburger transform" : "hamburger"}
        onClick={() => setClick(!click)}
      >
        <span></span>
      </div>
      <ul className={click ? "open" : ""}>
        <li>
          <Link
           activeClass="active"
           to="home"
           spy={true}
           smooth={true}
           duration={500}
          >Home</Link>
        </li>
        <li>
          <Link
          activeClass="active"
           to="about"
           spy={true}
           smooth={true}
           offset={-20}
           duration={500}
          >About Us</Link>
        </li>
        <li>
          <Link
          activeClass="active"
           to="ourproducts"
           spy={true}
           smooth={true}
           offset={-70}
           duration={500}
          >Our Products</Link>
        </li>
        <li>
          <Link
          activeClass="active"
           to="ourclients"
           spy={true}
           smooth={true}
           offset={-70}
           duration={500}
          >Our Clients</Link>
        </li>
        <li>
          <Link
          activeClass="active"
           to="contact"
           spy={true}
           smooth={true}
           offset={-70}
           duration={500}
          >Contact</Link>
        </li>
      </ul>
       <button > <Link
      activeClass="go"
      to="quote"
      spy={true}
      smooth={true}
      duration={500}
      >
    Get a Quote
      </Link>
      </button>
    </HeaderSec>

    </>
  );
}

const HeaderSec = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  .hu{
    background:#ff0000;
    height:100px;
    width:100px;
  }
  @media (min-width: 992px) {
    width: 90%;
    align-items:center;
  }
  .hamburger {
    padding: 20px 43px 20px 6px;
    position: absolute;
    left: 7%;
    top: 16%;
    z-index: 99;
    @media (min-width: 992px) {
      display: none;
    }
    span {
      background: #fff;
      height: 5px;
      width: 35px;
      position: absolute;
      border-radius: 10px;
      transition: 0.7s;
      &:before {
        content: "";
        width: 100%;
        height: 100%;
        background: #fff;
        position: absolute;
        top: -11px;
        border-radius: 10px;
        transition: 0.7s;
      }
      &:after {
        content: "";
        width: 100%;
        height: 100%;
        background: #fff;
        position: absolute;
        top: 11px;
        border-radius: 10px;
        transition: 0.7s;
      }
    }
  }
  .transform {
    span {
      transform: rotate(360deg);
      background: transparent;
      &:before {
        transform: rotate(495deg);
        background: #000000;
        top: 0;
      }
      &:after {
        transform: rotate(-495deg);
        background: #000000;
        top: 0;
      }
    }
  }
  ul {
    width: 100%;
    border-top: 1px solid ${(props) => props.theme.color.orange};
    background: #fff;
    position: absolute;
    top: 0;
    left: -100%;
    height: 100vh;
    display: flex;
    align-items: center;
    z-index:6;
    
    justify-content: center;
    flex-direction: column;
    transition: 0.7s;
    overflow: hidden;
    @media (min-width: 768px) {
      height: 660px;
      
    }
    @media (min-width: 992px) {
      flex-direction: row;
      border: none;
      width:max-content;
      left: 0;
      background: transparent;
      justify-content: unset;
      align-items: unset;
      margin:20px 0;
    }
    a {
      padding: 20px;
      display: block;
      text-decoration: none;
      color: #000000;
      font-family: ${(props) => props.theme.fam.robotob};
      font-size: 24px;
      line-height: 28px;
      transition:0.7s;
      
      &:hover{
        color:${props => props.theme.color.orange};
      }
      @media (min-width: 992px) {
        padding: 20px 10px;
        color: #fff;
        font-size: 20px;
      }
      @media (min-width: 1200px) {
        padding: 20px;

      }
    }
    li{
       .active{
        color:${props => props.theme.color.orange};
      }
    }
   
  }
  .open {
    left: 0;
  }
  button {
    font-family: ${(props) => props.theme.fam.robotob};
    font-weight: bold;
    font-size: 15px;
    padding: 13px 25px 0;
    line-height: 42px;
    cursor:pointer;
    color: #fff;
    background: ${(props) => props.theme.color.orange};
    border: none;
    margin-left: auto;
    position:relative;
    z-index:5;
    margin-right: 7%;
    @media (min-width: 992px) {
      font-size: 25px;
      margin-right: 0;
      padding:30px 25px 10px;
    }
  }
`;

export default Header;

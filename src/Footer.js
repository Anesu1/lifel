import React from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";



function Footer() {
  return (
    <FooterSec id="contact">
      <Link activeClass="active"
           to="home"
           spy={true}
           smooth={true}
           duration={500} >
      <img src="./imgs/logo.png"  alt="" />
      </Link>
      
      <div className="footer-inner">
        <h4>Head Office </h4>
        <p>
          Tell: +263 242 707061. <br />
          Cell: + 263 772 338 950
        </p>
        <p>
          Fidelity Life Towers <br />
          5th Floor North Wing <br />
          Cnr Raleigh Street & Kaguvi <br />
          Street, Harare.
        </p>
      </div>
      <div className="footer-inner">
        <h4>Factory</h4>
        <p>
          69 Munro Road <br />
          Cranborne <br />
          Harare.
        </p>
      </div>
      <div className="footer-inner">
        <h4>Chiredzi Branch</h4>
        <p>
          Concord Complex <br />
          733 Musasa Road <br />
          Chiredzi
        </p>
      </div>
    </FooterSec>
  );
}

const FooterSec = styled.footer`
  background: ${(props) => props.theme.color.orange};
  color: #fff;
  padding: 5%;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  img {
    width: 150px;
    @media (min-width: 768px) {
      width: 115px;
      object-fit: contain;
    }
    @media (min-width: 992px) {
      width: 210px;
      flex:0.4;
    }
  }
  .footer-inner {
    margin-bottom: 30px;

    h4 {
      font-family: ${(props) => props.theme.fam.robotob};
      font-weight: bold;
      font-size: 22px;
      line-height: 42px;
    }
    p {
      font-family: ${(props) => props.theme.fam.robotor};
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 20px;
      margin-bottom: 20px;
      @media (min-width: 768px) {
        font-size: 13px;
      }
    }
  }
`;

export default Footer;

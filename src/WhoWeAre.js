import React from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";


function WhoWeAre() {
  return (
    <WhoSec id="about">
      <div className="who-top">
        <img src="./imgs/who.jpg" alt="" />
        <div className="who-right">
          <h2>About Us</h2>
          <p>
            LIFEL CLOTHING & HARDWARE (Pvt) Ltd (Lifel) is a registered company
            incorporated on the 4th of April 2004. Lifel is a one stop shop for
            all protective clothing. Depending on the size and field of your
            organization, we have different products and services to meet your
            requirements. We provide the optimum and customized solutions made
            for your organization.
          </p>
          <p>
            Lifel began its business operation as a hardware in April 2004 and
            started Manufacturing of corporate wear and protective clothing and
            Safety shoes in January 2006.
          </p>
          <p>
            Lifel is focusing exclusively in Manufacturing of cost-effective and
            high quality products. We are advancing on a tremendous pace and
            with involvement of skilled and experienced people working in the
            organization.
          </p>
          <p>
            Lifel Clothing is currently doing business with Government
            departments, Mining sector, Telecommunication companies and Large
            Corporate organisations and Individuals.{" "}
          </p>
          <button>
          <Link
      activeClass="go"
      to="quote"
      spy={true}
      smooth={true}
      duration={500}
      >Get in touch with us for a quote
      </Link>
            </button>
        </div>
      </div>
     
    </WhoSec>
  );
}

const WhoSec = styled.section`
  margin: 5%;
  .who-top {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
    img {
      width: 100%;
      @media (min-width: 768px) {
        width: 40%;
        object-fit: contain;
        margin-right: 10px;
      }
      @media(min-width:992px){
        width: 34%;
    }
    }
    .who-right {
      margin-top: 30px;
      width:100%;
      @media(min-width:992px){
        width:61%;
    }
      h2 {
        font-family: ${(props) => props.theme.fam.robotob};
        color: ${(props) => props.theme.color.orange};
        font-weight: bold;
        font-size: 30px;
        line-height: 30px;
        margin-bottom: 30px;
      }
      p {
        font-family: ${(props) => props.theme.fam.robotor};
        font-size: 15px;
        line-height: 30px;
        margin-bottom: 20px;
        @media(min-width:768px){
      line-height:20px;
    }
    @media(min-width:992px){
      line-height:30px;
      font-size: 16px;
    }
      }
      button {
        background: ${(props) => props.theme.color.orange};
        color: #fff;
        width: 100%;
        margin-top: 30px;
        @media(min-width:768px){
      width:350px;
    }
      }
    }
  }
 
  button {
    height: 50px;
    font-family: ${(props) => props.theme.fam.robotob};
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    border: none;
  }
`;

export default WhoWeAre;

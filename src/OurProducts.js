import React, { useState } from "react";
import { ThemeProvider } from "@zendeskgarden/react-theming";
import { Tabs, TabList, Tab, TabPanel } from "@zendeskgarden/react-tabs";
import styled from "styled-components";
import TabLink from "./styled/TabLink";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Link } from "react-scroll";

const OurProducts = () => {
  const [selectedTab, setSelectedTab] = useState("tab-1");
  const [schoolIndex, setSchoolIndex] = useState(0);
  const [isOpenImage, setIsOpenImage] = useState(false);
  const [coIndex, setCoIndex] = useState(0);
  const [coOpen, setCoOpen] = useState(false);
  const [hosIndex, setHosIndex] = useState(0);
  const [hosOpen, setHosOpen] = useState(false);
  const [indIndex, setIndIndex] = useState(0);
  const [indOpen, setIndOpen] = useState(false);
  const [healthIndex, setHealthIndex] = useState(0);
  const [healthOpen, setHealthOpen] = useState(false);
  const [saIndex,setSaIndex] = useState(0);
  const [saOpen,setSaOpen] = useState(false);

  const school = [
    "./imgs/uniforms/school1.jpeg",
    "./imgs/uniforms/school2.jpeg",
    "./imgs/uniforms/school3.jpeg",
    "./imgs/uniforms/school4.jpg",
    "./imgs/uniforms/school5.jpeg",
    "./imgs/uniforms/school6.jpg",
    "./imgs/uniforms/school7.jpg",
    "./imgs/uniforms/school8.jpeg",
    "./imgs/uniforms/school9.jpeg",
  ];

  const corporate = [
    "./imgs/Corporate/cop.jpg",
    "./imgs/Corporate/cop1.jpg",
    "./imgs/Corporate/cop2.jpg",
    "./imgs/Corporate/cop3.jpg",
    "./imgs/Corporate/cop4.jpg",
    "./imgs/Corporate/cop5.jpg",
    "./imgs/Corporate/cop9.jpg",
    "./imgs/Corporate/cop6.jpg",
    "./imgs/Corporate/cop8.jpg"
  ]

  const hospitality = [
    "./imgs/Hospitality/hospitality1.jpg",
    "./imgs/Hospitality/hospitality2.jpg",
    "./imgs/Hospitality/hospitality3.jpg",
    "./imgs/Hospitality/hospitality4.jpeg",
    "./imgs/Hospitality/hospitality5.jpg",
    "./imgs/Hospitality/hospitality6.jpeg",
    "./imgs/Hospitality/hospitality7.jfif",
    "./imgs/Hospitality/hospitality8.jfif",
    "./imgs/Hospitality/hospitality9.jfif"
  ]

  const industrial = [
    "./imgs/industry/industry1.jpg",
    "./imgs/industry/industry2.jpg",
    "./imgs/industry/industry3.jpg",
    "./imgs/industry/industry4.jpg",
    "./imgs/industry/industry5.jpg",
    "./imgs/industry/industry6.jpg",
    "./imgs/industry/industry7.jpg",
    "./imgs/industry/industry8.jpg",
    "./imgs/industry/industry9.jpg"
  ]

  const healthcare = [
    "./imgs/Healthcare/he1.jpeg" ,
    "./imgs/Healthcare/he2.jpeg" ,
    "./imgs/Healthcare/he3.jpeg" ,
    "./imgs/Healthcare/he4.jpg" ,
    "./imgs/Healthcare/he5.jpeg" ,
    "./imgs/Healthcare/he6.jpeg" ,
    "./imgs/Healthcare/he7.webp" ,
    "./imgs/Healthcare/he8.jpeg" ,
    "./imgs/Healthcare/he9.jpeg" 
  ]

  const sa = [
    "./imgs/sa/sa1.jpg",
    "./imgs/sa/sa2.jpg",
    "./imgs/sa/sa3.jpg",
    "./imgs/sa/sa4.jpg",
    "./imgs/sa/sa5.jpg",
    "./imgs/sa/sa6.jpg",
    "./imgs/sa/sa7.jpg",
    "./imgs/sa/sa8.jpg",
    "./imgs/sa/sa9.webp"
  ]

  const tabz = [
    {
      item: "tab-1",
      text: "School Uniforms",
    },
    {
      item: "tab-2",
      text: "Corporate Uniforms",
    },
    {
      item: "tab-3",
      text: "Hospitality Uniforms",
    },
    {
      item: "tab-4",
      text: "Industrial Uniforms",
    },
    {
      item: "tab-5",
      text: "Healthcare Uniforms",
    },
    {
      item: "tab-6",
      text: "Shoes & Accessories",
    },
  ];

  return (
    <OurProductsSec id="ourproducts">
      <ThemeProvider>
        <Tabs
          className="tabs-sec"
          selectedItem={selectedTab}
          onChange={setSelectedTab}
        >
          <TabList className="tab-list">
            <h2>Our Products</h2>
            <div className="header">
              {tabz.map((tab, i) => {
                return (
                  <Tab key={i} item={tab.item} className="tab-header">
                    <TabLink text={tab.text} />
                  </Tab>
                );
              })}
            </div>
          </TabList>
          <TabPanel className="item" item="tab-1">
            <h2>Leading School Uniform Supplier</h2>
            <p>
              Lifel Clothing & Hardware carries the widest range of school-wear
              in Zimbabwe. From tracksuits to blazers, shirts, shorts and skirts
              in a variety of colours and designs. We have what you are looking
              for. With each uniform designed using the latest advances in
              design and technology, sending your children off to school may
              never have been such a proud moment. In colours that are specially
              created to remain bright and materials that are easy to keep crisp
              and clean, our uniforms will ensure that your children are looking
              and feeling their best, every single school day.
            </p>
            <h2>Our Collection</h2>
            <div className="img">
              <div className="img-item">
                <img src="./imgs/uniforms/school1.jpeg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpenImage(true);
                      setSchoolIndex(0)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/uniforms/school2.jpeg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpenImage(true);
                      setSchoolIndex(1)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/uniforms/school3.jpeg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpenImage(true);
                      setSchoolIndex(2)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/uniforms/school4.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpenImage(true);
                      setSchoolIndex(3)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/uniforms/school5.jpeg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpenImage(true);
                      setSchoolIndex(4)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/uniforms/school6.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpenImage(true);
                      setSchoolIndex(5)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/uniforms/school7.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpenImage(true);
                      setSchoolIndex(6)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/uniforms/school8.jpeg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpenImage(true);
                      setSchoolIndex(7)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/uniforms/school9.jpeg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpenImage(true);
                      setSchoolIndex(8)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
            </div>
            {isOpenImage && (
              <Lightbox
                mainSrc={school[schoolIndex]}
                nextSrc={school[(schoolIndex + 1) % school.length]}
                prevSrc={
                  school[(schoolIndex + school.length - 1) % school.length]
                }
                onCloseRequest={() => setIsOpenImage(false)}
                onMovePrevRequest={() =>
                  setSchoolIndex(
                    (schoolIndex + school.length - 1) % school.length
                  )
                }
                onMoveNextRequest={() =>
                  setSchoolIndex((schoolIndex + 1) % school.length)
                }
              />
            )}
          </TabPanel>
          <TabPanel className="item" item="tab-2">
            <h2>Corporate Uniform Supplier</h2>
            <p>
              Lifel Clothing & Hardware has grown progressively over the years.
              We specialised in customisation of Corporate Uniforms, T-Shirts,
              Jackets, Sports wears & Other Garments with years of experience.
              We tailor make our uniforms and apparels to serve both business
              and leisure. This make us a leading supplier of corporate uniforms
              for a variety of industries, including banks, airlines, offices,
              and hotels.
            </p>
            <p>
              Professionalism should be conveyed by members of the staff. A
              clean and distinguished appearance can inspire trust in customers
              and allow employees to perform the best job possible. All Uniform
              Wear, with excellent service and prices, strives to be the best
              corporate uniform company for all businesses. Therefore it is our
              main duty as Lifel Clothing & Hardware to give you the best deal
              as we are there to support your back through quality and appearing
              uniforms in the market.
            </p>
            <h2>Our Collection</h2>
            <div className="img">
              <div className="img-item">
                <img src="./imgs/Corporate/cop.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setCoOpen(true);
                      setCoIndex(0)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Corporate/cop1.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setCoOpen(true);
                      setCoIndex(1)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Corporate/cop2.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setCoOpen(true);
                      setCoIndex(2)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Corporate/cop3.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setCoOpen(true);
                      setCoIndex(3)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Corporate/cop4.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setCoOpen(true);
                      setCoIndex(4)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Corporate/cop5.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setCoOpen(true);
                      setCoIndex(5)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Corporate/cop9.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setCoOpen(true);
                      setCoIndex(6)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Corporate/cop6.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setCoOpen(true);
                      setCoIndex(7)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Corporate/cop8.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setCoOpen(true);
                      setCoIndex(8)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
            </div>

            {coOpen && (
              <Lightbox
                mainSrc={corporate[coIndex]}
                nextSrc={corporate[(coIndex + 1) % corporate.length]}
                prevSrc={
                  corporate[(coIndex + corporate.length - 1) % corporate.length]
                }
                onCloseRequest={() => setCoOpen(false)}
                onMovePrevRequest={() =>
                  setCoIndex(
                    (coIndex + corporate.length - 1) % corporate.length
                  )
                }
                onMoveNextRequest={() =>
                  setCoIndex((coIndex + 1) % corporate.length)
                }
              />
            )}
          </TabPanel>
          <TabPanel className="item" item="tab-3">
            <h2>Hospitality Uniforms Supplier</h2>
            <p>
              Lifel Clothing & Hardware is a leading supplier of hospitality
              uniforms and catering clothing in Africa. Through our custom
              hospitality wear, we will help your company create a unique
              brand-identity through your staff uniforms. We offer high-quality
              workwear for various sectors and brands. We manufacture
              fashionable uniforms out of different fabrics, colours, and
              patterns with custom designs. We also offer a wide range of
              accessories suitable for various uniforms. You can contact our
              marketing term on +263 772 338 950
            </p>
            <h3>Our Hospitality Range</h3>
            <h3>Chef & Kitchen Staff Uniforms</h3>
            <p>
              We provide tailor made hospitality uniform such as chef coats,
              pants, and hats to enhance the professional look of your
              restaurant staff. We also offer other kitchen wear items such as
              aprons, further customized with your brand’s logo.
            </p>
            <h2>Our Collection</h2>
            <div className="img">
              <div className="img-item">
                <img src="./imgs/Hospitality/hospitality1.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setHosOpen(true);
                      setHosIndex(0)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Hospitality/hospitality2.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setHosOpen(true);
                      setHosIndex(1)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Hospitality/hospitality3.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setHosOpen(true);
                      setHosIndex(2)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Hospitality/hospitality4.jpeg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setHosOpen(true);
                      setHosIndex(3)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Hospitality/hospitality5.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setHosOpen(true);
                      setHosIndex(4)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Hospitality/hospitality6.jpeg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setHosOpen(true);
                      setHosIndex(5)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Hospitality/hospitality7.jfif" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setHosOpen(true);
                      setHosIndex(6)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Hospitality/hospitality8.jfif" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setHosOpen(true);
                      setHosIndex(7)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Hospitality/hospitality9.jfif" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setHosOpen(true);
                      setHosIndex(8)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
            </div>
            {hosOpen && (
              <Lightbox
                mainSrc={hospitality[hosIndex]}
                nextSrc={hospitality[(hosIndex + 1) % hospitality.length]}
                prevSrc={
                  hospitality[(hosIndex + hospitality.length - 1) % hospitality.length]
                }
                onCloseRequest={() => setHosOpen(false)}
                onMovePrevRequest={() =>
                  setHosIndex(
                    (hosIndex + hospitality.length - 1) % hospitality.length
                  )
                }
                onMoveNextRequest={() =>
                  setHosIndex((hosIndex + 1) % hospitality.length)
                }
              />
            )}
          </TabPanel>
          <TabPanel className="item" item="tab-4">
            <h2>Industrial Uniform Supplier</h2>
            <p>
              Where mobility and safety matter Lifel Clothing & Hardware
              products can make a difference. We provide industrial uniforms and
              apparel that work as hard as the tradespeople that wear them. Our
              wide selection of premium quality industrial uniforms is designed
              to provide best comfort, protection, and flexibility in the
              toughest conditions found in factories, on construction sites, and
              other industrial work environments.
            </p>
            <h2>Our Collection</h2>
            <div className="img">
              <div className="img-item">
                <img src="./imgs/industry/industry1.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIndOpen(true);
                      setIndIndex(0)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/industry/industry2.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIndOpen(true);
                      setIndIndex(1)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/industry/industry3.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIndOpen(true);
                      setIndIndex(2)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/industry/industry4.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIndOpen(true);
                      setIndIndex(3)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/industry/industry5.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIndOpen(true);
                      setIndIndex(4)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/industry/industry6.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIndOpen(true);
                      setIndIndex(5)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/industry/industry7.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIndOpen(true);
                      setIndIndex(6)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/industry/industry8.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIndOpen(true);
                      setIndIndex(7)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/industry/industry9.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setIndOpen(true);
                      setIndIndex(8)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
            </div>
            {indOpen && (
              <Lightbox
                mainSrc={industrial[indIndex]}
                nextSrc={industrial[(indIndex + 1) % industrial.length]}
                prevSrc={
                  industrial[(indIndex + industrial.length - 1) % industrial.length]
                }
                onCloseRequest={() => setIndOpen(false)}
                onMovePrevRequest={() =>
                  setIndIndex(
                    (indIndex + industrial.length - 1) % industrial.length
                  )
                }
                onMoveNextRequest={() =>
                  setIndIndex((indIndex + 1) % industrial.length)
                }
              />
            )}
          </TabPanel>
          <TabPanel className="item" item="tab-5">
            <h2>Healthcare Uniform Supplier</h2>
            <p>
              Lifel Clothing & Hardware is a leading provider of top quality
              medical scrubs, offering medical uniforms below clearance prices!.
              Our services cater to individual and large office orders and
              purchases as well as special Hospital showcases. There is no order
              too small or too big for us.
            </p>
            <p>
              We offer a great selection of hospital uniforms with fashionable
              necklines such as round-neck and V neck to choose from. Our
              healthcare uniform services also include personalization of custom
              uniforms with embroidery so that the work clothes are consistent
              with your branded custom logo or badge. By choosing Lifel Clothing
              & Hardware as your healthcare uniform supplier clients can
              benefits form quality and genuine products. For more information
              about our product get intouch with the marketing term on
            </p>
            <h3>Our Healthcare Uniform Range</h3>
            <p>
              From medical scrubs and nurse to receptionist uniforms and medical
              dresses, our design is to meet the key specifications required by
              nurses and carers for working in a healthcare environment, such as
              durability, flexibility and safety.
            </p>
            <p>
              We are a leading uniform company providing corporate apparel for
              medical personals working in hospitals, dental clinic, and
              healthcare centers. Lifel Clothing & Hardware is a one stop shop
              for trendy work uniform and other garment collection at affordable
              price in Africa . Through our well-equipped manufacturing units
              and expert professionals in different parts of Zimbabwe, we offer
              timely delivery of all the healthcare staff uniforms order.
            </p>
            <div className="img">
              <div className="img-item">
                <img src="./imgs/Healthcare/he1.jpeg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setHealthOpen(true);
                      setHealthIndex(0)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Healthcare/he2.jpeg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setHealthOpen(true);
                      setHealthIndex(1)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Healthcare/he3.jpeg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setHealthOpen(true);
                      setHealthIndex(2)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Healthcare/he4.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setHealthOpen(true);
                      setHealthIndex(3)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Healthcare/he5.jpeg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setHealthOpen(true);
                      setHealthIndex(4)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Healthcare/he6.jpeg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setHealthOpen(true);
                      setHealthIndex(5)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Healthcare/he7.webp" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setHealthOpen(true);
                      setHealthIndex(6)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Healthcare/he8.jpeg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setHealthOpen(true);
                      setHealthIndex(7)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/Healthcare/he9.jpeg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setHealthOpen(true);
                      setHealthIndex(8)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
            </div>
            {healthOpen && (
              <Lightbox
                mainSrc={healthcare[healthIndex]}
                nextSrc={healthcare[(healthIndex + 1) % healthcare.length]}
                prevSrc={
                  healthcare[(healthIndex + healthcare.length - 1) % healthcare.length]
                }
                onCloseRequest={() => setHealthOpen(false)}
                onMovePrevRequest={() =>
                  setHealthIndex(
                    (healthIndex + healthcare.length - 1) % healthcare.length
                  )
                }
                onMoveNextRequest={() =>
                  setHealthIndex((healthIndex + 1) % healthcare.length)
                }
              />
            )}
          </TabPanel>
          <TabPanel className="item" item="tab-6">
            <h2>Shoes & Accessories</h2>
            <p>
              Find the best touch to your smart uniforms through our collection
              of work shoes and accessories from formal bow ties to ties and
              scarves, badges, and shoes. Our range has items to suit a wide
              range of professions.
            </p>
            <h2>Shoes & Accessories Collection</h2>
            <div className="img">
              <div className="img-item">
                <img src="./imgs/sa/sa1.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setSaOpen(true);
                      setSaIndex(0)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/sa/sa2.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setSaOpen(true);
                      setSaIndex(1)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/sa/sa3.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setSaOpen(true);
                      setSaIndex(2)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/sa/sa4.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setSaOpen(true);
                      setSaIndex(3)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/sa/sa5.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setSaOpen(true);
                      setSaIndex(4)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/sa/sa6.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setSaOpen(true);
                      setSaIndex(5)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/sa/sa7.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setSaOpen(true);
                      setSaIndex(6)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/sa/sa8.jpg" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setSaOpen(true);
                      setSaIndex(7)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
              <div className="img-item">
                <img src="./imgs/sa/sa9.webp" alt="" />
                <Link href="#popup">
                  <a
                    className="popup-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      setSaOpen(true);
                      setSaIndex(8)
                    }}
                  >
                    View
                  </a>
                </Link>
              </div>
            </div>
            {saOpen && (
              <Lightbox
                mainSrc={sa[saIndex]}
                nextSrc={sa[(saIndex + 1) % sa.length]}
                prevSrc={
                  sa[(saIndex + sa.length - 1) % sa.length]
                }
                onCloseRequest={() => setSaOpen(false)}
                onMovePrevRequest={() =>
                  setSaIndex(
                    (saIndex + sa.length - 1) % sa.length
                  )
                }
                onMoveNextRequest={() =>
                  setSaIndex((saIndex + 1) % sa.length)
                }
              />
            )}
          </TabPanel>
        </Tabs>
      </ThemeProvider>
    </OurProductsSec>
  );
};

const OurProductsSec = styled.section`
  margin: 5%;
  @media (min-width: 768px) {
    margin: 5%;
  }
  .tabs-sec {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
    .tab-list {
      width: 100%;
      @media (min-width: 768px) {
        width: 28%;
        display: flex;
        flex-direction: column;
      }
      .tab-header {
        width: 50%;
        margin-bottom: 10px;
        @media (min-width: 768px) {
          width: 90%;
          margin-bottom: 0;
        }
        button {
          width: 89%;
          font-size: x-small;
          @media (min-width: 768px) {
            border-bottom: none;
            text-align: left;
            font-size: 15px;
          }
        }
      }
    }
    .item {
      @media (min-width: 768px) {
        width: 70%;
      }
    }
  }
  .header {
    margin: 20px 0;
    padding-bottom: 20px;
    flex-wrap: wrap;
    align-items: flex-start;
    display: flex;
    @media (min-width: 768px) {
      overflow: unset;
      flex-direction: column;
    }
    div {
      border-bottom: none;
      padding: 0;
      display: block;
      width: 90%;
      text-align: left;
      @media (min-width: 768px) {
        padding: 10px;
        border-bottom: 1px solid #000000 !important;
      }
      button {
        transition: 0.7s;
        @media (min-width: 768px) {
          color: #000;
        }
        @media (min-width: 992px) {
          font-size: 20px;
        }
      }
    }
    div[aria-selected="true"] {
      @media (min-width: 768px) {
        background: ${(props) => props.theme.color.orange};
      }
      button {
        border-color: ${(props) => props.theme.color.orange};
        color: ${(props) => props.theme.color.orange};
        @media (min-width: 768px) {
          color: #ffffff;
          border-color: none;

          background: transparent;
        }
      }
    }
  }
  .img {
    @media (min-width: 768px) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .img-item {
      width: 100%;
      margin-bottom: 20px;
      height: 150px;
      position:relative;
      overflow: hidden;
      display: block;
      &:last-child,
      &:nth-child(7),
      &:nth-child(8) {
        display: none;
      }
      >a {
        position: absolute;
        z-index: 99;
        height:100%;
        top:0;
        left:0;
        text-decoration:none;
        font-family:${props => props.theme.fam.robotob};
        width:100%;
        color:transparent;
        display:flex;
        align-items:center;
        justify-content:center;
        a{
          display:block;
          text-decoration:none;
          padding:100px;
        }
        &:hover{
          background:#00000078;
          color:#fff;
        }
      }
      @media (min-width: 568px) {
        max-width: 300px;
      }
      @media (min-width: 768px) {
        width: 31.5%;
        margin: 0;
        margin-bottom: 20px;
        display: block;
        height: 100px;
        &:last-child,
        &:nth-child(7),
        &:nth-child(8) {
          display: block;
        }
      }
      @media (min-width: 992px) {
        height: 150px;
      }
      @media (min-width: 1200px) {
        height: 170px;
      }
      img {
        width: 100%;
        transform: scale(1.5);
        object-fit: contain;
        @media (min-width: 1200px) {
          transform: scale(1.3);
        }
      }
    }
  }
  h2 {
    font-family: ${(props) => props.theme.fam.robotob};
    font-weight: bold;
    font-size: 28px;
    line-height: 42px;
    margin-bottom: 20px;
    color: #000000;
    width: 100%;
  }
  h3 {
    font-family: ${(props) => props.theme.fam.robotob};
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 20px;
  }
  p {
    font-family: ${(props) => props.theme.fam.robotor};
    font-weight: normal;
    font-size: 15px;
    line-height: 28px;
    margin-bottom: 30px;
  }
`;

export default OurProducts;

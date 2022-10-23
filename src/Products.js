import React, { useState } from "react";
import styled from "styled-components";
import emailjs from 'emailjs-com'

function Products() {
  const [selected, setSelected] = useState("");

  function sendEmail(e){
    e.preventDefault();

    emailjs
    .sendForm(
      "service_dttk19a",
      "template_32hvxf2",
      e.target,
      "user_AvFsIOT2oTISGGE7bdlG5"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) =>{
        console.log(error.text);
      }
    )
    e.target.reset();
  }

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };
 
  let type = null;
  let options = null;

  
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }
  return (
    <QouteSec id="quote" img="./imgs/qoute.jpg">
      <div className="qoute-left">
        <p>High quality, High Standard & reliable solution & service</p>
      </div>
      <div className="quote-inner">
        <h3>Get A Qoute</h3>
        <form onSubmit={sendEmail}>
          <input type="text" name="fullName" id="fullName" placeholder="Full Name" required/>
          <input type="text" name="email" id="email" placeholder="Email" required/>
          <select name="type" id="type" onChange={changeSelectOptionHandler} required>
            <option>Choose...</option>
            <option>School Uniform</option>
            <option>Cooperate Uniform</option>
            <option>Hospitality Uniforms</option>
            <option>Industrial Uniforms</option>
            <option>Healthcare Uniforms</option>
            <option>Shoes & Accessories</option>
          </select>
          <textarea
            name="message"
            cols="30"
            rows="10"
            id="message"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </QouteSec>
  );
}

const QouteSec = styled.section`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.33),
      rgba(0, 0, 0, 0.33)
    ),
    url("${(props) => props.img}");
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 5%;
  .qoute-left{
    display:none;
    color:#fff;
    
    flex-direction:column;
    height:100%;
    justify-content: flex-end;
    @media(min-width:992px){
      width:45%;
      display:flex;
    }
    span{
      font-size:30px;
      font-family:${props => props.theme.fam.robotor};

    }
    p{
      font-size:50px;
      font-family:${props => props.theme.fam.robotob};
      margin-bottom:0;
    }
  }
  .quote-inner{
    border-radius:3px;
    box-shadow:0px 3px 11px #0000003d;
    background:#fff;
    padding:20px;
    max-width:300px;
    margin:0 auto;
    @media(min-width:768px){
      margin-left:auto;
      max-width:400px;
    }
    h3{
      font-size:25px;
      font-family:${props => props.theme.fam.robotob};
      line-height:30px;
      margin-bottom:20px;
    }
    form{
      input,textarea,select{
        width:100%;
        outline:none;
        margin-bottom:10px;
        font-family:${props => props.theme.fam.robotor};
        &::placeholder{
          color:#000;
        }
      }
      input{
        height:50px;
        padding:5px 0;
        border:none;
        font-size:15px;
        border-bottom:1px solid #000000;
      }
      select{
        height:50px;
        padding:5px 0;
        border:none;
        font-size:15px;
        border-bottom:1px solid #000000;
      }
      textarea{
        padding:5px 0;
        border:none;
        font-size:15px;
        border-bottom:1px solid #000000;
      }
      button{
        background:${props => props.theme.color.orange};
        color:#fff;
        width:100%;
        border:none;
        height:50px;
        margin-top:20px;
        font-family:${props => props.theme.fam.robotor};
      }
    }
  }
`;

export default Products;

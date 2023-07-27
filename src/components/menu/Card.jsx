import React from "react";
import styled from "styled-components";

import img from "../../images/khinkali.jpeg";

const Card = ({ key, name, category, price, description, image }) => {
  return (
    <CARD>
      <IMGBOX>
        <img src={image} alt="" />
      </IMGBOX>
      <TEXTBOX>
        <h2>{name}</h2>
        <p>{}</p>

        <PRICEDIV>
          <PRICE>
            <p>{price}$</p>
          </PRICE>
          <ADD>
            <p>HH</p>
          </ADD>
        </PRICEDIV>
      </TEXTBOX>
    </CARD>
  );
};

export default Card;

const CARD = styled.div`
  margin: 2rem;
  width: 250px;
  height: 300px;
  border-radius: 1rem;
  border: 1px solid var(--dark);
  display: flex;
  flex-direction: column;
  background-color: var(--darker);
`;
const IMGBOX = styled.div`
  height: 60%;
  width: 100%;
  background-color: #0e0647;
  overflow: hidden;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const TEXTBOX = styled.div`
  height: 40%;
  width: 100%;
  position: relative;
  p {
    font-size: 15px;
    margin: 10px;
    margin-bottom: 5px;
  }
  h2 {
    font-size: 18px;
    margin: 5px 0px 0px 5px;
  }
`;

const PRICEDIV = styled.div`
  transform: translate(-50%, -50%);
  border-radius: 10px;
  width: 70%;
  height: 44px;
  position: absolute;
  z-index: 1;
  bottom: -22px;
  left: 50%;
  transform: translate(-50%);
  font-size: calc(12px + 0.3vw);
  overflow: hidden;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.593);
`;

const PRICE = styled.div`
  width: 50%;
  background-color: #09361c;
  display: flex;
  align-items: center;
  p {
    margin: 0 auto;
    font-size: 20px;
  }
`;

const ADD = styled.div`
  width: 50%;
  background-color: #0c6d26;
  display: flex;
  align-items: center;
  p {
    margin: 0 auto;
    font-size: 25px;
  }
`;

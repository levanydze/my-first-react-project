import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <DIVWRAPNAV>
        <DIVNAVL>
          <Link to="/home">HOME</Link>
          <Link to="/product">PRODUCT</Link>
          <Link to="/menu">MENU</Link>
          <Link to="/checkout">CHECKOUT</Link>
        </DIVNAVL>
        <DIVNAVR>
          <button>Log In</button>
        </DIVNAVR>
      </DIVWRAPNAV>
    </div>
  );
};

export default Nav;

const DIVWRAPNAV = styled.div`
  position: fixed;
  top: 0;
  height: 4rem;
  width: 100%;
  display: flex;
  background-color: var(--dark);
  backdrop-filter: blur(5px);
  font-family: "BenchNine", sans-serif;
  font-size: 30px;
  z-index: 100;
`;
const DIVNAVL = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0rem 1rem;
  color: var(--light);

  p {
    font-weight: 500;
    font-size: 20px;
  }
`;

const DIVNAVR = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  width: 30%;
  margin-right: 10%;
  button {
    width: 6rem;
    height: 2rem;
    font-size: 1.2rem;
    background: none;
    background-color: var(--medium);
    border-radius: 10px;
    color: var(--light);
  }
`;

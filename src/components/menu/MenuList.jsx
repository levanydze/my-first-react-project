import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { useState, useEffect } from "react";
import FooodMenu from "./FooodMenu";

const MenuList = () => {
  const [listBtn, setListBtn] = useState(true);

  const listHandlerBtn = () => {
    setListBtn(!listBtn);
  };

  return (
    <MENULIST>
      <h3>M E N U</h3>
      <EACHCATEGORY>
        <CATNAME>
          MAIN DISHES <button onClick={listHandlerBtn}>+</button>
        </CATNAME>
        <CARDLIST className={listBtn ? "active" : ""}>
          <FooodMenu></FooodMenu>
        </CARDLIST>
      </EACHCATEGORY>
      <EACHCATEGORY>
        <CATNAME>
          MAIN DISHES <button onClick={listHandlerBtn}>+</button>
        </CATNAME>
        <CARDLIST className={listBtn ? "active" : ""}>
          <FooodMenu></FooodMenu>
        </CARDLIST>
      </EACHCATEGORY>
    </MENULIST>
  );
};

export default MenuList;

const MENULIST = styled.div`
  background-color: var(--dark);
  color: var(--light);
  h3 {
    font-family: "BenchNine", sans-serif;
    font-size: 40px;
    border-top: 2px solid var(--medium);
    border-bottom: 2px solid var(--medium);
  }
`;

const EACHCATEGORY = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CATNAME = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 2px solid var(--medium);
  justify-content: space-around;
  padding: 0.5rem 0rem;
  position: relative;
  button {
    position: absolute;
    right: 20px;
    width: 2rem;
    background: none;
    border: none;
    color: var(--light);
    font-size: 20px;
    cursor: pointer;
  }
`;
const CARDLIST = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;
  display: none;
  &.active {
    display: flex;
    overflow: visible;
  }
`;

import React from "react";
import { styled } from "styled-components";
import Card from "./Card123";
const Product = () => {
  return (
    <div className="product-page">
      <PROWRAP>
        {items.map((item) => (
          <Card name={item.name} price={item.price} key={item.id}></Card>
        ))}
      </PROWRAP>
    </div>
  );
};

export default Product;

const items = [
  { id: 1, name: "მაისური", price: 50 },
  { id: 2, name: "შარვალი", price: 10 },
  { id: 3, name: "ტრუსიკი", price: 150 },
  { id: 4, name: "შორტი", price: 250 },
  { id: 5, name: "დაკიდერავი", price: 350 },
  { id: 6, name: "მაისური", price: 50 },
  { id: 7, name: "შარვალი", price: 10 },
  { id: 8, name: "ტრუსიკი", price: 150 },
  { id: 9, name: "შორტი", price: 250 },
  { id: 10, name: "დაკიდერავი", price: 350 },
  { id: 11, name: "მაისური", price: 50 },
  { id: 12, name: "შარვალი", price: 10 },
  { id: 13, name: "ტრუსიკი", price: 150 },
  { id: 14, name: "შორტი", price: 250 },
  { id: 15, name: "დაკიდერავი", price: 350 },
];

const PROWRAP = styled.div`
  padding-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  button {
    border-radius: 5px;
  }
  h1 {
    color: white;
    width: 100%;
  }
`;

import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import { styled } from "styled-components";

function FooodMenu() {
  const [foodMenu, setFoodMenu] = useState([]);

  useEffect(() => {
    getFoodMenu();
  }, []);

  const getFoodMenu = async () => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=1`
      );
      const data = await response.json();
      setFoodMenu(data.recipes);
    } catch (error) {
      console.error("Error fetching food menu:", error);
    }
  };

  return (
    <FMDIV>
      {foodMenu.map((food) => (
        <Card
          key={food.id}
          name={food.title}
          description={food.instructions}
          image={food.image}
          price={food.pricePerServing}
        ></Card>
      ))}
    </FMDIV>
  );
}

export default FooodMenu;

const FMDIV = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 2px solid var(--medium);
  justify-content: space-around;
  background-color: var(--medium);
`;

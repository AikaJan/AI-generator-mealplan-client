import React, { useEffect, useState, useCallback } from "react";
import RecipeCard from "./../Recipe/RecipeCard.jsx";

function PageOne() {
  const [recipeData, setRecipeData] = useState("");
  const [recipeTexts, setRecipeTexts] = useState(["", "", ""]);

  const closeEventStream = (eventSource) => {
    if (eventSource) {
      eventSource.close();
    }
  };

  const initializeSingleEventStream = (index, queryParams) => {
    const eventSource = new EventSource(
      `${process.env.REACT_APP_API_BASE_URL}/recipeStream?${queryParams}`
    );
    // const eventSource = new EventSource(
    //   `https://ai-generator-mealplan-server.vercel.app/recipeStream?mealPlan=${mealPlan}`
    // );
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.action === "close") {
        closeEventStream(eventSource);
      } else if (data.action === "chunk") {
        setRecipeTexts((prevTexts) => {
          const newTexts = [...prevTexts];
          newTexts[index] += data.chunk;
          return newTexts;
        });
      }
    };
  };

  const initializeEventStreams = useCallback(async () => {
    const recipeInputs = { ...recipeData };
    const queryParams = new URLSearchParams(recipeInputs).toString();

    // loop to handle 3 event streams
    for (let i = 0; i < 3; i++) {
      initializeSingleEventStream(i, queryParams);
    }
  }, [recipeData]);

  useEffect(() => {
    if (recipeData) {
      initializeEventStreams();
    }
  }, [recipeData, initializeEventStreams]);

  async function onSubmit(data) {
    setRecipeTexts(["", "", ""]);
    setRecipeData(data);
  }

  return (
    <div>
      <div className="top-container">
        <RecipeCard onSubmit={onSubmit} />
      </div>
      <div className="bottom-container">
        <div className="recipe-text">
          <h2>Option 1</h2>
          {recipeTexts[0]}
        </div>
        <div className="recipe-text">
          <h2>Option 2</h2>
          {recipeTexts[1]}
        </div>
        <div className="recipe-text">
          <h2>Option 3</h2>
          {recipeTexts[2]}
        </div>
      </div>
    </div>
  );
}

export default PageOne;

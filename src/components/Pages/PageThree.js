// import React, { useState, useRef } from "react";
// import axios from "axios";

// const PageThree = () => {
//   const [response, setResponse] = useState("");
//   const [isSaving, setIsSaving] = useState(false);
//   const [savedPlans, setSavedPlans] = useState([]);
//   const savedPlansRef = useRef(null);

//   const handleSubmit = () => {
//     const mealPlan =
//       "Create me a 7-day gluten and sugar-free meal plan, no cooking description. Break each day down separately starting with Day 1:. Split them into several parts, like. Breakfast:, Snack:, Lunch:, Snack:, Dinner:. Start each step with a new paragraph";

//     const eventSource = new EventSource(
//       `http://localhost:3001/recipeStream?mealPlan=${mealPlan}`
//     );
//     // const eventSource = new EventSource(
//     //   `https://ai-generator-mealplan-server.vercel.app/recipeStream?mealPlan=${mealPlan}`
//     // );
//     eventSource.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       if (data.action === "close") {
//         eventSource.close();
//       } else if (data.action === "chunk") {
//         setResponse((prev) => prev + data.chunk);
//       }
//     };

//     eventSource.onerror = () => {
//       eventSource.close();
//       setResponse("An error occurred while generating the meal plan.");
//     };
//   };

//   const handleSaveMealplanInDatabase = async () => {
//     if (!response) return;

//     try {
//       setIsSaving(true);
//       const res = await axios.post("http://localhost:3001/savePlan", {
//         mealPlan: response,
//       });
//       if (res.status === 200) {
//         alert("Meal plan saved successfully!");
//       } else {
//         alert("Failed to save the meal plan.");
//       }
//     } catch (error) {
//       console.error("Error saving meal plan:", error);
//       alert("An error occurred while saving the meal plan.");
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   const fetchSavedMealPlans = async () => {
//     try {
//       const res = await axios.get("http://localhost:3001/getPlan");
//       if (res.status === 200) {
//         setSavedPlans(res.data);
//         // Scroll to the saved meal plans section after fetching
//         savedPlansRef.current.scrollIntoView({ behavior: "smooth" });
//       } else {
//         alert("Failed to retrieve saved meal plans.");
//       }
//     } catch (error) {
//       console.error("Error fetching meal plans:", error);
//       alert("An error occurred while fetching the meal plans.");
//     }
//   };

//   const formatResponse = (response) => {
//     const cleanedResponse = response.replace(/\*\*/g, "");
//     const formattedText = cleanedResponse
//       .split(/(Day \d+:)|Breakfast:|Snack:|Lunch:|Dinner:|\n/g)
//       .filter((section) => section !== undefined && section.trim() !== "")
//       .map((section, index) => {
//         if (/Day \d+:/.test(section)) {
//           return `<h2 key=${index}>${section.trim()}</h2>`;
//         } else {
//           return `<p key=${index}>${section.trim()}</p>`;
//         }
//       })
//       .join("");

//     return { __html: formattedText };
//   };

//   return (
//     <div className="meal-recipe">
//       <h1>7-day Gluten and Sugar-Free Meal Plan</h1>

//       <div className="btn">
//         <button type="button" onClick={handleSubmit}>
//           Generate
//         </button>
//         <button
//           type="button"
//           onClick={fetchSavedMealPlans}
//           style={{ marginLeft: "2rem" }}
//         >
//           See saved meal plans
//         </button>
//       </div>

//       {response && (
//         <div className="generated-response">
//           <h2>Generated Meal Plan</h2>
//           <div dangerouslySetInnerHTML={formatResponse(response)} />
//           <button onClick={handleSaveMealplanInDatabase} disabled={isSaving}>
//             {isSaving ? "Saving..." : "Save this meal plan"}
//           </button>
//         </div>
//       )}

//       {savedPlans.length > 0 && (
//         <div className="saved-meal-plans" ref={savedPlansRef}>
//           <h2>Saved Meal Plans</h2>
//           <ol>
//             {savedPlans.map((plan, index) => (
//               <li key={index}>
//                 <div dangerouslySetInnerHTML={formatResponse(plan.plan)} />
//               </li>
//             ))}
//           </ol>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PageThree;

import React, { useState, useRef } from "react";
import axios from "axios";

const PageThree = () => {
  const [response, setResponse] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [savedPlans, setSavedPlans] = useState([]);
  const savedPlansRef = useRef(null);

  const handleSubmit = () => {
    const mealPlan =
      "Create me a 7-day gluten and sugar-free meal plan, no cooking description. Break each day down separately starting with Day 1:. Split them into several parts, like. Breakfast:, Snack:, Lunch:, Snack:, Dinner:. Start each step with a new paragraph";

    // const eventSource = new EventSource(
    //   `http://localhost:3001/recipeStream?mealPlan=${mealPlan}`
    // );
    const eventSource = new EventSource(
      // `https://ai-generator-mealplan-server.vercel.app/recipeStream?mealPlan=${mealPlan}`
      `${process.env.REACT_APP_API_BASE_URL}/recipeStream?mealPlan=${mealPlan}`
    );
    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.action === "close") {
        eventSource.close();
      } else if (data.action === "chunk") {
        setResponse((prev) => prev + data.chunk);
      }
    };

    eventSource.onerror = () => {
      eventSource.close();
      setResponse("An error occurred while generating the meal plan.");
    };
  };

  const handleSaveMealplanInDatabase = async () => {
    if (!response) return;

    try {
      setIsSaving(true);
      // const res = await axios.post("http://localhost:3001/savePlan", {
      const res = await axios.post(
        // "https://ai-generator-mealplan-server.vercel.app/savePlan",
        `${process.env.REACT_APP_API_BASE_URL}/savePlan`,
        {
          mealPlan: response,
        }
      );
      if (res.status === 200) {
        alert("Meal plan saved successfully!");
      } else {
        alert("Failed to save the meal plan.");
      }
    } catch (error) {
      console.error("Error saving meal plan:", error);
      alert("An error occurred while saving the meal plan.");
    } finally {
      setIsSaving(false);
    }
  };

  const fetchSavedMealPlans = async () => {
    try {
      // const res = await axios.get("http://localhost:3001/getPlan");
      const res = await axios.get(
        // "https://ai-generator-mealplan-server.vercel.app/getPlan"
        `${process.env.REACT_APP_API_BASE_URL}/getPlan`,
      );

      if (res.status === 200) {
        setSavedPlans(res.data);
        // Scroll to the saved meal plans section after fetching
        savedPlansRef.current.scrollIntoView({ behavior: "smooth" });
      } else {
        alert("Failed to retrieve saved meal plans.");
      }
    } catch (error) {
      console.error("Error fetching meal plans:", error);
      alert("An error occurred while fetching the meal plans.");
    }
  };

  const formatResponse = (response) => {
    const cleanedResponse = response.replace(/\*\*/g, "");
    const formattedText = cleanedResponse
      .split(/(Day \d+:)|Breakfast:|Snack:|Lunch:|Dinner:|\n/g)
      .filter((section) => section !== undefined && section.trim() !== "")
      .map((section, index) => {
        if (/Day \d+:/.test(section)) {
          return `<h2 key=${index}>${section.trim()}</h2>`;
        } else {
          return `<p key=${index}>${section.trim()}</p>`;
        }
      })
      .join("");

    return { __html: formattedText };
  };

  return (
    <div className="meal-recipe">
      <h1>7-day Gluten and Sugar-Free Meal Plan</h1>

      <div className="btn">
        <button type="button" onClick={handleSubmit}>
          Generate
        </button>
        <button
          type="button"
          onClick={fetchSavedMealPlans}
          style={{ marginLeft: "2rem" }}
        >
          See saved meal plans
        </button>
      </div>

      {response && (
        <div className="generated-response">
          <h2>Generated Meal Plan</h2>
          <div dangerouslySetInnerHTML={formatResponse(response)} />
          <button onClick={handleSaveMealplanInDatabase} disabled={isSaving}>
            {isSaving ? "Saving..." : "Save this meal plan"}
          </button>
        </div>
      )}

      {savedPlans.length > 0 && (
        <div className="saved-meal-plans" ref={savedPlansRef}>
          <h2>Saved Meal Plans</h2>
          <ol>
            {savedPlans.map((plan, index) => (
              <li key={index}>
                <div dangerouslySetInnerHTML={formatResponse(plan.plan)} />
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default PageThree;


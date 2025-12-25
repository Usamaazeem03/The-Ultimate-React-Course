import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Text() {
//   const [moveRating, setMoveRating] = React.useState("__");
//   return (
//     <div>
//       <StarRating
//         color="red"
//         size={30}
//         messages={["Bad", "Okay", "Good", "Great", "Excellent"]}
//         onSetRating={setMoveRating}
//       />
//       <p>This move have {moveRating} star rating</p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} defaultRating={3} />
    <StarRating
      maxRating={5}
      color="pink"
      size={22}
      messages={["Bad", "Okay", "Good", "Great", "Excellent"]}
    />
    <Text /> */}
  </React.StrictMode>
);

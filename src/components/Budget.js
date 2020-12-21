import React from "react";

// Budget is a functional (not class-based) component. It does not have a "state" in the same way a class-based function does (but with React's Hooks, not used here, it can essentially have a state).
// It's essentially a controlled component, and just displays data based on the props that are given from its parent. 

function Budget(props) {
  const { budget } = props;

  // Here the variable items is a list of <li> tags. We can ask for this list in our return function to display our list of budget items.
  const items = budget.map((item, index) => 
    <li key={index} >{item.title}: ${item.amount}</li>
  );

  return (
    <div>
      <h2>Your budget</h2>
      {/* Using the JSX syntax {} we can insert the list of <li> tags, items, in our return statement to see a bulleted list in our UI */}
      <ul>{items}</ul>
    </div>
  );
}

export default Budget;
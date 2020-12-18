import { render } from "@testing-library/react";
import React from "react";

function Budget(props) {
  const { budget } = props;
  const items = budget.map((item, index) => 
    <li key={index} >{item.title}: ${item.amount}</li>
  );

  return (
    <div>
      <h2>Your budget</h2>
      <ul>{items}</ul>
    </div>
  );
}

export default Budget;
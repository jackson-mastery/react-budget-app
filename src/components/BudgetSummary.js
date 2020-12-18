import React from 'react';

function BudgetSummary(props) {
  const { budget, expenses } = props;
  const totalBudget = budget.reduce((total, budget) => {
    return total + budget.amount;
  }, 0);
  const totalSpending = expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);

  return (
    <React.Fragment>
      {totalSpending > totalBudget ?
        <p>You are ${totalSpending - totalBudget} over budget.</p>  
      :
        <p>You are ${totalBudget - totalSpending} under budget, nice job!</p>
      }
    </React.Fragment>
  )
}

export default BudgetSummary;
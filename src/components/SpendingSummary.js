import React from 'react';

function SpendingSummary(props) {
  const { expenses, income } = props;
  const totalExpenses = expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);
  const totalIncome = income.reduce((total, income) => {
    return total + income.amount;
  }, 0);

  return (
    <React.Fragment>
      {totalExpenses > totalIncome ?
        <p>Your net worth decreased ${totalExpenses - totalIncome}</p>
      :
        <p>Your net worth increased ${totalIncome - totalExpenses}</p>
      }
    </React.Fragment>
  )
}

export default SpendingSummary;
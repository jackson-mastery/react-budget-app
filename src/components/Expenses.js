import React from "react";

class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextAmount: '',
    }
  }

  handleTextChange = e => {
    const data = e.target.value;
    this.setState({
      nextAmount: data,
    });
  }

  render() {
    const { expenses, addExpense, delExpense } = this.props;
    const { nextAmount } = this.state;

    const items = expenses.map((item, index) =>
      <li key={index} >
        {item.title}: ${item.amount}
        <button onClick={() => {delExpense(item.id)}}>x</button>
      </li>
    );

    return (
      <div>
        <h2>Your Expenses</h2>
        <ul>{items}</ul>
        <input 
          type='text' 
          value={nextAmount}
          onChange={this.handleTextChange}
        />
        <button
          onClick={() => {addExpense(this.state.nextAmount)}}
        >
          Add
        </button>
      </div>
    );
  }
}

export default Expenses;
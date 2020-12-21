import React from "react";

// Expenses is a class-based component that helps us keep track of the current expense amount that a user has typed into the text input box
class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextAmount: '',
    }
  }

  // Each time the text in the input box is changed we store that new amount in state (which causes the component to re-render with the new amount displayed)
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
        {/* This input gets its value from this.state.nextAmount, and on every change it updates this.state.nextAmount using this.handleTextChange() */}
        <input 
          type='text' 
          value={nextAmount}
          onChange={this.handleTextChange}
        />
        {/* When this button is clicked we call the addExpense function from our props, which is really the parent component's addExpense function, and pass this.state.nextAmount to be added to the parent's state */}
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
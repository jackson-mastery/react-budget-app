import React from "react";

class Income extends React.Component {
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

  render () {
    const { income, addIncome, delIncome } = this.props;
    const { nextAmount } = this.state;

    const items = income.map((item, index) => 
      <li key={index} >
        {item.title}: ${item.amount}
        <button onClick={() => {delIncome(item.id)}}>x</button>
      </li>
    );

    return (
      <div>
        <h2>Your Income</h2>
        <ul>{items}</ul>
        <input 
          type='text' 
          value={nextAmount}
          onChange={this.handleTextChange}
        />
        <button
          onClick={() => {addIncome(this.state.nextAmount)}}
        >
          Add
        </button>
      </div>
    );
  }
  
}

export default Income;
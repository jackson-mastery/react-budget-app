import React from "react";
import { v4 as uuidv4 } from 'uuid';

import Budget from './Budget';
import Expenses from './Expenses';
import Income from './Income';
import BudgetSummary from './BudgetSummary';
import SpendingSummary from './SpendingSummary';

import '../App.css';

// BudgetPlanning is the top-level component, and its state is our source of 
// truth for all the child components. 
// This is equivalent to the App.vue file in the Vue version of this app
class BudgetPlanning extends React.Component {

    constructor(props) {
        super(props);
        // In this.state is where we store all the current data for our budget
        // We initialize it with the object below, and we cause the UI/components to 
        // re-render when we alter this.state in the future.
        // This is also the only time (in the constructor) we'll directly change data in this.state. 
        // Any change we want to make in the future should use this.setState()
        this.state = {
            budget: [
                {
                    id: 0,
                    title: "Food",
                    amount: 500,
                },
                {
                    id: 1,
                    title: "Gas",
                    amount: 50,
                },
                {
                    id: 2,
                    title: "Rent",
                    amount: 650,
                },
                {
                    id: 3,
                    title: "Extras",
                    amount: 300,
                },
            ],
            expenses: [
                {
                    id: 1,
                    amount: 150,
                },
                {
                    id: 2,
                    amount: 276,
                },
                {
                    id: 3,
                    amount: 89,
                },
            ],
            income: [
                {
                    id: 1,
                    amount: 1500,
                },
                {
                    id: 2,
                    amount: 3400,
                },
            ],
        }
    }

    // Takes a new expense entered by a user and saves it to our state
    // This call to setState() causes this component (and its children) to re-render
    // with the new state, so we see the new amount on the screen
    addExpense = newAmount => {
        const id = uuidv4();
        const newItem = {id: id, amount: parseInt(newAmount)};
        this.setState(prevState => ({
            expenses: [...prevState.expenses, newItem],
        }));
    }

    // Deletes an expense, uses setState() to update the component's state
    // and cause a re-render
    delExpense = id => {
        this.setState(prevState => ({
            expenses: prevState.expenses.filter(expense => expense.id !== id),
        }));
    }

    // Takes a new income entered by a user and saves it to our state
    // This call to setState() causes this component (and its children) to re-render
    // with the new state, so we see the new amount on the screen
    addIncome = newAmount => {
        const id = uuidv4();
        const newItem = {id: id, amount: parseInt(newAmount)};
        this.setState(prevState => ({
            income: [...prevState.income, newItem],
        }));
    }

    // Deletes an income, uses setState() to update the component's state
    // and cause a re-render
    delIncome = id => {
        this.setState(prevState => ({
            income: prevState.income.filter(income => income.id !== id),
        }));
    }

    // This is the method that's run when a component is "rendered", and its return
    // statement is how we actually render things in the UI.
    // This component will get "rendered" at the end of the constructor, and 
    // each time setState() is called somewhere above.
    render () {
        // We can put any logic/code here we would like to run before 
        // we return what this component should render

        // Here we pull a couple values out of this.state to make our
        // code a little more readable below
        const { budget, expenses, income } = this.state;

        return (
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-third'>
                            {/* Asking for a Budget component, and giving it the prop "budget" */}
                            <Budget
                                budget={budget}
                            />
                        </div>
                        <div className='col-third'>
                            {/* Asking for an Expenses component, and giving it the prop "expenses", as well as the props "addExpense" and "delExpense". These last two let us call this component's "addExpense" and "delExpense" methods from within the Expense component. This is how we can cause changes to this component's state from within a child component */}
                            <Expenses 
                                expenses={expenses}
                                addExpense={this.addExpense}
                                delExpense={this.delExpense}
                            />
                        </div>
                        <div className='col-third'>
                            <Income
                                income={income}
                                addIncome={this.addIncome}
                                delIncome={this.delIncome}
                            />
                        </div>
                    </div>
                    <hr style={{margin: '2rem 0'}} />
                    <div className='row'>
                        <div className='col-full'>
                            <BudgetSummary
                                budget={budget}
                                expenses={expenses}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-full'>
                            <SpendingSummary
                                expenses={expenses}
                                income={income}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }    
}

export default BudgetPlanning;
import React from "react";
import { v4 as uuidv4 } from 'uuid';

import Budget from './Budget';
import Expenses from './Expenses';
import Income from './Income';
import BudgetSummary from './BudgetSummary';
import SpendingSummary from './SpendingSummary';

import '../App.css';

class BudgetPlanning extends React.Component {
    constructor(props) {
        super(props);
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

    addExpense = newAmount => {
        const id = uuidv4();
        const newItem = {id: id, amount: parseInt(newAmount)};
        this.setState(prevState => ({
            expenses: [...prevState.expenses, newItem],
        }));
    }
    delExpense = id => {
        this.setState(prevState => ({
            expenses: prevState.expenses.filter(expense => expense.id !== id),
        }));
    }
    addIncome = newAmount => {
        const id = uuidv4();
        const newItem = {id: id, amount: parseInt(newAmount)};
        this.setState(prevState => ({
            income: [...prevState.income, newItem],
        }));
    }
    delIncome = id => {
        this.setState(prevState => ({
            income: prevState.income.filter(income => income.id !== id),
        }));
    }

    render () {
        const { budget, expenses, income } = this.state;

        return (
            <React.Fragment>
                <div className='container'>
                    <div className='row'>
                        <div className='col-third'>
                            <Budget
                                budget={budget}
                            />
                        </div>
                        <div className='col-third'>
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
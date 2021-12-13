import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = ()=> {
  const expenses = [
    { title: 'Toilet paper', amount: 94.12, date: new Date(2021, 2, 26) },
    { title: 'Car insurance', amount: 294.67, date: new Date(2021, 4, 12) },
    { title: 'Pizza', amount: 10, date: new Date(2021, 0, 1) }
  ]

  const addExpenseHandler = expense => {
    console.log('In app.js');
    console.log(expense);
    // expenses.push(expense);
  };
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

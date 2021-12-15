import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const Initial_Expenses = [
  { title: 'Toilet paper', amount: 94.12, date: new Date(2021, 2, 26) },
  { title: 'Car insurance', amount: 294.67, date: new Date(2021, 4, 12) },
  { title: 'Pizza', amount: 10, date: new Date(2021, 0, 1) }
]

const App = ()=> {
  const [expenses, setExpenses] = useState(Initial_Expenses);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses => {
      return [expense, ...prevExpenses]
    }))
  };
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

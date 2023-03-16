import { useState } from 'react';
import ExpenseList from './expense-tracker/components/ExpenseList';
import ExpensesFilter from './expense-tracker/components/ExpensesFilter';
import ExpensesForm from './expense-tracker/components/ExpensesForm';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const [expenses, setExpenses] = useState([
    { id: 1, description: 'milk', amount: 200, category: 'Groceries' },
    { id: 2, description: 'eggs', amount: 300, category: 'Utilities' },
    { id: 3, description: 'milk', amount: 500, category: 'Entertainments' },
    { id: 4, description: 'eggs', amount: 600, category: 'Utilities' },
  ]);

  const handleDelete = (id: number) => {
    const expense = expenses.filter((ex) => ex.id !== id);
    setExpenses(expense);
  };

  const visibleCategories = selectedCategory ? expenses.filter(expense => expense.category === selectedCategory) : expenses;

  return (
    <div className="mb-3 mt-3">
      <div className="mb-3">
        <ExpensesForm onSubmit={(expense) => setExpenses([...expenses,{ ...expense, id: expenses.length + 1 } ])} />
      </div>
      <div className="mb-3">
        <ExpensesFilter onSelectedCategory={(category) => setSelectedCategory(category)} />
      </div>
      <ExpenseList onDelete={handleDelete} expenses={visibleCategories} />
    </div>
  );
}

export default App;
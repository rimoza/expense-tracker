
interface IExpenseTracker {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface IExpensesTracker {
  expenses: IExpenseTracker[];
  onDelete: (id: number) =>void;
}

const ExpenseList = ({ expenses, onDelete }: IExpensesTracker) => {
  if(expenses.length  === 0) return <h3 className="text-danger">No expenses added yet!</h3>

  return (
    <div>
      <h1>Expenses List</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td> <button className="btn btn-outline-danger" onClick={() => onDelete(expense.id)}>Delete</button> </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>${expenses.reduce((acc, expense) => expense.amount + acc, 0).toFixed(2)}</td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default ExpenseList
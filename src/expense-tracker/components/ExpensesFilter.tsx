import categories from "./categoriesItems";

interface ISelectedCategory {
    onSelectedCategory: (category: string) => void;
}

const ExpensesFilter = ({onSelectedCategory}: ISelectedCategory) => {
  return (
    <div>
        <h3 className="mb-3">Filter by Category:</h3>
        <select className="form-select" onChange={(event) =>onSelectedCategory(event.target.value)}>
        <option value="">All Categories</option>
        {categories.map(category => (
            <option key={category} value={category}>{category}</option>
        ))}
    </select>
    </div>
  )
}

export default ExpensesFilter
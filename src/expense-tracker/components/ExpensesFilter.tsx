import categories from "./categoriesItems";

interface ISelectedCategory {
    onSelectedCategory: (category: string) => void;
}

const ExpensesFilter = ({onSelectedCategory}: ISelectedCategory) => {
  return (
    <select className="form-select" onChange={(event) =>onSelectedCategory(event.target.value)}>
        <option value="">All Categories</option>
        {categories.map(category => (
            <option key={category} value={category}>{category}</option>
        ))}
    </select>
  )
}

export default ExpensesFilter
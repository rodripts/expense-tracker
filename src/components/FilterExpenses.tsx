import { useBudget } from "../hooks/useBudget"


const FilterExpenses = () => {
  const {dispatch} = useBudget()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({type: 'filter-expense', payload: {category: e.target.value}})
  }
  return (
    <div>
        <form action="">
            <label htmlFor="" className="text-lg font-semibold mr-2">Filter expenses</label>
            <select name="" id="" onChange={handleChange} className="px-5 py-1">
                <option value="1">---All categories---</option>
                <option value="Feeding">Feeding</option>
                <option value="Accounts and payments">Accounts and payments</option>
                <option value="House">House</option>
                <option value="Transport">Transport</option>
                <option value="Clothes">Clothes</option>
                <option value="Health and hygiene">Health and hygiene</option>
                <option value="Fun">Fun</option>
                <option value="Other expenses">Other expenses</option>
            </select>
        </form>
    </div>
  )
}

export default FilterExpenses
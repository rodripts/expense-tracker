import { useState } from "react"
import { useBudget } from "../hooks/useBudget"

const BudgetHeader = () => {
  const [budget, setBudget] = useState(0)
  const {dispatch} = useBudget()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber)
  }

  const handleDisabled = () => {
    return budget === 0
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({type:'add-budget', payload:{budget}})
  }
  return (
    <div className="pb-80 pt-5">
        <form onSubmit={handleSubmit} className="w-3/4 bg-white py-8 px-5 m-auto flex text-center flex-col rounded-lg shadow-lg">
            <label className="text-2xl font-bold my-2">¿What is your budget?</label>
            <input type="number" placeholder="Budget" onChange={handleChange} className="rounded-md my-2 py-3 px-2 border-2 text-xs"/>
            <button disabled={handleDisabled()}  className="p-2 bg-orange-500 text-white rounded-md text-sm my-2 font-semibold disabled:opacity-10">Define budget</button>
        </form>
    </div>
  )
}

export default BudgetHeader
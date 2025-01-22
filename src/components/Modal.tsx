import { useState } from "react"
import { useBudget } from "../hooks/useBudget"
import { ExpenseType } from "../types"

import {v4 as uuidv4} from 'uuid'

const Modal = () => {
  const {dispatch} = useBudget()

  const [expense, setExpense] = useState<ExpenseType>({
    id: uuidv4(),
    expenseName: '',
    amount: 0,
    category: '',
    date: ''
  })

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    dispatch({type: 'add-expense', payload:{expense}})
  }

  const handleChangeString = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name
    setExpense({
      ...expense,
      [name]: e.target.value
    })
  }

  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpense({
      ...expense,
      amount: e.target.valueAsNumber
    })
  }

  const handleDisabled = () => {
    return (expense.expenseName !== '', expense.amount !== 0, expense.category !== '1', expense.date !== '') 
  }
  
  return (
    <div className="w-full py-8 px-5 m-auto rounded-lg">
        <h1 className="text-center text-2xl font-bold mb-5">New expense</h1>
        <form className="flex flex-col">
            <input type="text" name="expenseName" onChange={handleChangeString} className="rounded-md py-3 px-2 border-2"/>
            <label htmlFor="" className="mb-5 ml-3 text-sm text-gray-400">Expense name</label>

            <input type="number" name="amount" onChange={handleChangeNumber} className="rounded-md py-3 px-2 border-2"/>
            <label htmlFor="" className="mb-5 ml-3 text-sm text-gray-400">Amount of expense
            </label>

            <select name="category" id="" onChange={handleChangeString} className="py-3 px-2 rounded-md border-2">
                <option value="1">Select an option</option>
                <option value="Feeding">Feeding</option>
                <option value="Accounts and payments">Accounts and payments</option>
                <option value="House">House</option>
                <option value="Transport">Transport</option>
                <option value="Clothes">Clothes</option>
                <option value="Health and hygiene">Health and hygiene</option>
                <option value="Fun">Fun</option>
                <option value="Other expenses">Other expenses</option>
            </select>
            <label htmlFor="" className="mb-5 ml-3 text-sm text-gray-400">Category</label>


            <input type="date" name="date" onChange={handleChangeString} className="rounded-md py-1 px-2 border-2"/>
            <label htmlFor="" className="mb-5 ml-3 text-sm text-gray-400">Date of expense</label>

            <button onClick={handleClick} disabled={!handleDisabled()} className="px-5 py-2 bg-orange-500 text-white rounded-md font-semibold my-5 disabled:opacity-10">Add expense</button>
        </form>
    </div>
  )
}

export default Modal
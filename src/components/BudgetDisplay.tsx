import { useBudget } from "../hooks/useBudget"

import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';

const BudgetDisplay = () => {
  const {state, dispatch} = useBudget()
  const budgetSpent = state.expenses.reduce((total, expense) => expense.amount + total ,0)
  const budgetAvailable = state.budget - budgetSpent
  const percentage = Math.trunc(budgetSpent / state.budget * 100)

  return (
    <div className="w-3/4 bg-white py-8 px-5 m-auto my-10 flex text-center justify-evenly rounded-lg shadow-lg md:flex flex-col">
        <div>
            <figure className="mb-5 w-full m-auto md:w-1/5">
                <CircularProgressbar styles={buildStyles({
                  pathColor: '#fb923c',
                  textColor: '#fb923c'
                })} value={percentage} text={`${percentage}%`} />
            </figure>
        </div>
        <div className="font-bold text-black">
            <button onClick={() => dispatch({type: 'restart-app'})} className="px-5 py-2 bg-orange-500 text-white rounded-md my-2">Reset budget</button>
            <div className="flex flex-col justify-center">
              <p className="font-light  text-sm">Budget </p>
              <p className="text-lg">${state.budget}</p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-light  text-sm">Available </p>
              <p className="text-lg">${budgetAvailable}</p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-light text-sm">Spent</p>
              <p className="text-lg">${budgetSpent}</p>
            </div>
        </div>
    </div>
  )
}

export default BudgetDisplay
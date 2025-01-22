import { useEffect } from "react"
import BudgetHeader from "./components/BudgetHeader"
import MainSection from "./components/MainSection"
import { useBudget } from "./hooks/useBudget"

function App() {
  const {state} = useBudget()
  const isBudgetActive = state.budget  === 0
  useEffect(() =>{window.localStorage.setItem('expenses',JSON.stringify(state.expenses))}, [state.expenses])
  useEffect(() =>{window.localStorage.setItem('budget', JSON.stringify(state.budget))}, [state.budget])
  return (
    <div className="bg-yellow-500 flex flex-col justify-center align-center font-popins">
      <h1 className="text-5xl text-center mb-5  mx-5 pt-20 text-white font-bold">Expenses tracker</h1>
      {!isBudgetActive ? <MainSection /> : <BudgetHeader />}
    </div>

  )
}

export default App

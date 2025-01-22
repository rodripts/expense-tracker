import { useBudget } from "../hooks/useBudget"
import BudgetDisplay from "./BudgetDisplay"
import ExpenseModal from "./ExpenseModal"
import ExpenseSection from "./ExpenseSection"
import { Footer } from "./Footer"

const MainSection = () => {
    const {state} = useBudget()
  return (
    <>
    <div className="bg-yellow-500">
        <BudgetDisplay />
        <ExpenseModal />
        {state.expenses.length === 0 ? (
            <h1 className="text-4xl text-white font-bold text-center my-10 mx-5">You still don't have any expenses...</h1>

        ): <ExpenseSection />}
        <Footer />
    </div>
    </>
  )
}

export default MainSection
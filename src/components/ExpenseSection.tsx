import { useBudget } from "../hooks/useBudget"
import FilterExpenses from "./FilterExpenses"
import ExpenseItem from "./ExpenseItem"

const ExpenseSection = () => {
    const {state} = useBudget()

    const alimentacionItems = state.expenses.filter(e => e.category === 'Feeding')
    const pagosItems = state.expenses.filter(e => e.category === 'Accounts and payments')
    const CasaItems = state.expenses.filter(e => e.category === 'House')
    const transporteItems = state.expenses.filter(e => e.category === 'Transport')
    const ropaItems = state.expenses.filter(e => e.category === 'Clothes')
    const saludItems = state.expenses.filter(e => e.category === 'Health and hygiene')
    const diversionItems = state.expenses.filter(e => e.category === 'Fun')
    const otrosItems = state.expenses.filter(e => e.category === 'Other expenses')


  return (
    <div className="w-3/4 bg-white py-8 px-5 m-auto my-10 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-5">Expense list</h1>
        <FilterExpenses />
        {state.category === '1' && state.expenses.map((item) => (
            <ExpenseItem
                key={item.id}
                expenseName={item.expenseName}
                amount={item.amount}
                category={item.category}
                date={item.date}
                id={item.id}
            />
        ))}

        {state.category === 'Feeding' && alimentacionItems.map((item) => (
            <ExpenseItem
                key={item.id}   
                expenseName={item.expenseName}
                amount={item.amount}
                category={item.category}
                date={item.date}
                id={item.id}
            />
        ))}

        {state.category === 'Accounts and payments' && pagosItems.map((item) => (
            <ExpenseItem
                key={item.id}   
                expenseName={item.expenseName}
                amount={item.amount}
                category={item.category}
                date={item.date}
                id={item.id}
            />
        ))}

        {state.category === 'House' && CasaItems.map((item) => (
            <ExpenseItem
                key={item.id}   
                expenseName={item.expenseName}
                amount={item.amount}
                category={item.category}
                date={item.date}
                id={item.id}
            />
        ))} 

        {state.category === 'Transport' && transporteItems.map((item) => (
            <ExpenseItem
                key={item.id}   
                expenseName={item.expenseName}
                amount={item.amount}
                category={item.category}
                date={item.date}
                id={item.id}
            />
        ))}

        {state.category === 'Clothes' && ropaItems.map((item) => (
            <ExpenseItem
                key={item.id}   
                expenseName={item.expenseName}
                amount={item.amount}
                category={item.category}
                date={item.date}
                id={item.id}
            />
        ))} 

        {state.category === 'Health and hygiene' && saludItems.map((item) => (
            <ExpenseItem
                key={item.id}   
                expenseName={item.expenseName}
                amount={item.amount}
                category={item.category}
                date={item.date}
                id={item.id}
            />
        ))} 

        {state.category === 'Fun' && diversionItems.map((item) => (
            <ExpenseItem
                key={item.id}   
                expenseName={item.expenseName}
                amount={item.amount}
                category={item.category}
                date={item.date}
                id={item.id}
            />
        ))} 

        {state.category === 'Other expenses' && otrosItems.map((item) => (
            <ExpenseItem
                key={item.id}   
                expenseName={item.expenseName}
                amount={item.amount}
                category={item.category}
                date={item.date}
                id={item.id}
            />
        ))}
        </div>
  )
}

export default ExpenseSection
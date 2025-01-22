import { ExpenseType } from "../types"

export type BudgetState = {
    id: string,
    budget: number,
    modal: boolean
    expenses: ExpenseType[]
    category: string
}

export type BudgetAction = 
{type: 'add-budget', payload: {budget: number}} |
{type: 'open-modal', } |
{type: 'close-modal', } |
{type: 'add-expense', payload: {expense: ExpenseType}} |
{type: 'filter-expense', payload: {category: string}} |
{type: 'delete-item', payload: {id: ExpenseType['id']}} |
{type: 'restart-app'}

const LocalStorageExpenses = (): ExpenseType[] => {
    const expenses = localStorage.getItem('expenses')
    return expenses ? JSON.parse(expenses) : []
}

const LocalStorageBudget = (): number => {
    const budget = localStorage.getItem('budget')
    return budget ? JSON.parse(budget) : 0
}

export const initialState : BudgetState = {
    id: '',
    budget: LocalStorageBudget(),
    modal: false,
    expenses: LocalStorageExpenses(),
    category: '1'
}

export const budgetReducer = (
    state: BudgetState = initialState,
    action: BudgetAction
): BudgetState => {
    if(action.type === 'add-budget'){
        return{
            ...state,
            budget: action.payload.budget
        }
    }

    if(action.type === 'open-modal'){
        return{
            ...state,
            modal: true
        }
    }

    if(action.type === 'close-modal'){
        return{
            ...state,
            modal: false
        }
    }

    if(action.type === 'add-expense'){
        return{
            ...state,
            expenses: [...state.expenses, action.payload.expense],
            modal: false
        }
    }

    if(action.type === 'filter-expense'){
        return{
            ...state,
            category: action.payload.category
        }
    }

    if(action.type === 'delete-item') {
        return{
            ...state,
            expenses: state.expenses.filter((expense)=> expense.id !== action.payload.id)
        }
    }

    if(action.type === 'restart-app') {
        return {
            id: '1',
            budget: 0,
            modal: false,
            expenses: [],
            category: '1'
        }
    }
    return state
}
import { createSlice } from '@reduxjs/toolkit'


export const expenseSlice = createSlice({
    name: 'expense',
    initialState: {
        expense: {
            data: []
        }
    },
    reducers: {
        expenseLoad: (state, action) => {
            state.expense = action?.payload
        },
        expenseView: (state, action) => {
            const index = state.expense.data.findIndex(x => x.id === action.payload.id)
            state.expense.data[index] = action.payload
        },
        expenseUpdate: (state, action) => {
            const index = state.expense.data.findIndex(x => x.id === action.payload.id)
            state.expense.data[index] = action.payload
        },
        expenseSave: (state, action) => {
            state.expense.data = [
                ...action?.payload,
                ...state?.expense?.data
            ]
        },
        expenseDelete: (state, action) => {
            log(action)
            const index = state.expense.data.findIndex(x => x.id === action.payload)
            state.expense.data.splice(index, 1)
        }
    }
})

export const { expenseDelete, expenseLoad, expenseSave, expenseUpdate, expenseView } = expenseSlice.actions

export default expenseSlice.reducer

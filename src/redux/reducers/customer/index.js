// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

export const customerSlice = createSlice({
    name: 'customers',
    initialState: {
        customers: {
            data: []
        }
    },
    reducers: {
        customerView: (state, action) => {
            const index = state.customers.data.findIndex(x => x.id === action.payload.id)
            state.customers.data[index] = action.payload
        },
        customerLoad: (state, action) => {
            state.customers = action?.payload
        },
        customerUpdate: (state, action) => {
            const index = state.customers.data.findIndex(x => x.id === action.payload.id)
            state.customers.data[index] = action.payload
        },
        customerSave: (state, action) => {
            state.customers.data = [
                ...action?.payload,
                ...state?.customers?.data
            ]
        },

        customerDelete: (state, action) => {
            const index = state.customers.data.findIndex(x => x.id === action.payload)
            state.customers.data.splice(index, 1)
        }

    }
})

export const { customerDelete, customerLoad, customerSave, customerUpdate, customerView } = customerSlice.actions


export default customerSlice.reducer


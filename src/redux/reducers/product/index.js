// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: {
            data: []
        }
    },
    reducers: {
        productView: (state, action) => {
            const index = state.products.data.findIndex(x => x.id === action.payload.id)
            state.products.data[index] = action.payload
        },
        productLoad: (state, action) => {
            state.products = action?.payload
        },
        productUpdate: (state, action) => {
            const index = state.products.data.findIndex(x => x.id === action.payload.id)
            state.products.data[index] = action.payload
        },
        productSave: (state, action) => {
            state.products.data = [
                ...action?.payload,
                ...state?.products?.data
            ]
        },

        productDelete: (state, action) => {
            const index = state.products.data.findIndex(x => x.id === action.payload)
            state.products.data.splice(index, 1)
        }

    }
})

export const { productDelete, productLoad, productSave, productUpdate, productView } = productSlice.actions


export default productSlice.reducer


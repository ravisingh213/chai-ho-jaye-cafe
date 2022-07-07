// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'


export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menu: {
            data: []
        }
    },
    reducers: {
        menuLoad: (state, action) => {
            state.menu = action?.payload
        },
        menuView: (state, action) => {
            const index = state.menu.data.findIndex(x => x.id === action.payload.id)
            state.menu.data[index] = action.payload
        },
        menuUpdate: (state, action) => {
            const index = state.menu.data.findIndex(x => x.id === action.payload.id)
            state.menu.data[index] = action.payload
        },
        menuSave: (state, action) => {
            state.menu.data = [
                ...action?.payload,
                ...state?.bank?.data
            ]
        },
        menuDelete: (state, action) => {
            log(action)
            const index = state.menu.data.findIndex(x => x.id === action.payload)
            state.menu.data.splice(index, 1)
        }
    }
})

export const { menuDelete, menuLoad, menuSave, menuUpdate, menuView } = menuSlice.actions
export default menuSlice.reducer
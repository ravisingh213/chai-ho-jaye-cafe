// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

export const unitSlice = createSlice({
    name: 'units',
    initialState: {
        units: {
            data: []
        }
    },
    reducers: {
        unitView: (state, action) => {
            const index = state.units.data.findIndex(x => x.id === action.payload.id)
            state.units.data[index] = action.payload
        },
        unitLoad: (state, action) => {
            state.units = action?.payload
        },
        unitUpdate: (state, action) => {
            const index = state.units.data.findIndex(x => x.id === action.payload.id)
            state.units.data[index] = action.payload
        },
        unitSave: (state, action) => {
            state.units.data = [
                ...action?.payload,
                ...state?.units?.data
            ]
        },

        unitDelete: (state, action) => {
            const index = state.units.data.findIndex(x => x.id === action.payload)
            state.units.data.splice(index, 1)
        }

    }
})

export const { unitDelete, unitLoad, unitSave, unitUpdate, unitView } = unitSlice.actions


export default unitSlice.reducer


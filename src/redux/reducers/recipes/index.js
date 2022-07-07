import { createSlice } from '@reduxjs/toolkit'


export const menuSlice = createSlice({
    name: 'recipe',
    initialState: {
       recipe: {
            data: []
        }
    },
    reducers: {
       recipeLoad: (state, action) => {
            state.recipe = action?.payload
        },
       recipeView: (state, action) => {
            const index = state.recipe.data.findIndex(x => x.id === action.payload.id)
            state.recipe.data[index] = action.payload
        },
       recipeUpdate: (state, action) => {
            const index = state.recipe.data.findIndex(x => x.id === action.payload.id)
            state.recipe.data[index] = action.payload
        },
       recipeSave: (state, action) => {
            state.recipe.data = [
                ...action?.payload,
                ...state?.bank?.data
            ]
        },
       recipeDelete: (state, action) => {
            log(action)
            const index = state.recipe.data.findIndex(x => x.id === action.payload)
            state.recipe.data.splice(index, 1)
        }
    }
})

export const {recipeDelete,recipeLoad,recipeSave,recipeUpdate,recipeView } =recipeSlice.actions

export default recipeSlice.reducer

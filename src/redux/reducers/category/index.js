import { createSlice } from '@reduxjs/toolkit'


export const menuSlice = createSlice({
  name: 'category',
  initialState: {
    category: {
      data: []
    }
  },
  reducers: {
    categoryLoad: (state, action) => {
      state.category = action?.payload
    },
    categoryView: (state, action) => {
      const index = state.category.data.findIndex(x => x.id === action.payload.id)
      state.category.data[index] = action.payload
    },
    categoryUpdate: (state, action) => {
      const index = state.category.data.findIndex(x => x.id === action.payload.id)
      state.category.data[index] = action.payload
    },
    categorySave: (state, action) => {
      state.category.data = [
        ...action?.payload,
        ...state?.category?.data
      ]
    },
    categoryDelete: (state, action) => {
      log(action)
      const index = state.category.data.findIndex(x => x.id === action.payload)
      state.category.data.splice(index, 1)
    }
  }
})

export const { categoryDelete, categoryLoad, categorySave, categoryUpdate, categoryView } = menuSlice.actions

export default menuSlice.reducer

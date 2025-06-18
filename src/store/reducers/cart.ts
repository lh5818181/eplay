import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'

type CartState = {
  items: Game[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Game>) => {
      state.items.push(action.payload)
    }
  }
})

cartSlice.actions.addItem

export const { addItem } = cartSlice.actions
export default cartSlice.reducer

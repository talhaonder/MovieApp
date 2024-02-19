import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    addLikeItem: (state, action) => {
      const { id, title, poster_path } = action.payload;
      const likeItem = state.items.find((item) => item.like.id === id);
      if (!likeItem) {
        state.items.push({ like: { id, title, poster_path }, quantity: 1 });
      }
    },

    removeLikeItem: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.like.id !== id);
    },
  },
});

export const selectLikeItems = (state) => state.like.items;

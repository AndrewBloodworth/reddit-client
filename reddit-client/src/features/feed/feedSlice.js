import { createSlice } from '@reduxjs/toolkit';

const feedSlice = createSlice({
    name: 'feedSlice',
    initialState: {
        feed: {}
    },
    reducers: {
        loadPosts(state,action) {
            return action.payload
        }
    }
})

//Actions
/////////////////////////////////////////////////////////////
export const { loadPosts } = feedSlice.actions;

//Reducer
/////////////////////////////////////////////////////////////
export default feedSlice.reducer;

//Selectors
/////////////////////////////////////////////////////////////
export const selectFeed = (state) => state.feed.feed;
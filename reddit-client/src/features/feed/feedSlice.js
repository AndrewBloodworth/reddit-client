import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk(
    'feed/getPosts',
    async () => {
        const url = 'https://www.reddit.com/r/popular.json';
        const response = await fetch(url);
        const jsonResponse = await response.json();
        console.log('hello',jsonResponse);
        return jsonResponse;
    }
)
const feedSlice = createSlice({
    name: 'feed',
    initialState: {
        feed: {},
        isLoadingPosts: false,
        failedToLoadPosts: false
    },
    reducers: {
        loadPosts(state,action) {
            return action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state,action) => {
                console.log('pending');
                state.isLoadingPosts = true;
                state.failedToLoadPosts = false;
            })
            .addCase(getPosts.fulfilled, (state,action) => {
                console.log('fullfilled');
                state.isLoadingPosts = false;
                state.failedToLoadPosts = false;
                state.feed = action.payload;
            })
            .addCase(getPosts.rejected, (state,action) => {
                console.log('rejected');
                state.isLoadingPosts = false;
                state.failedToLoadPosts = true;
            })
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
export const selectFeed = (state) => state.feed;
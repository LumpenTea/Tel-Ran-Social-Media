import { createSlice } from "@reduxjs/toolkit"

const twitterState = {
    user: {
        avatar: 'https://www.gravatar.com/avatar/0?d=monsterid',
        name: 'Monster'
    },
    stats: {
        followers: 100,
        following: 300
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState: twitterState.user,
    reducers: {
        avatarAction(state, action) {
            state.avatar = action.payload ? action.payload : state.avatar;
        },
        nameAction(state, action) {
            state.name = action.payload ? action.payload : state.name;
        }
    }
})

const statsSlice = createSlice({
    name: 'stats',
    initialState: twitterState.stats,
    reducers: {
        incrementFollowers(state) {
            state.followers++;
        },
        decrementFollowers(state) {
            const res = state.followers - 1;
            state.followers = res < 0 ? state.followers : res;
        },
        incrementFollowing(state) {
            state.following++;
        },
        decrementFollowing(state) {
            const res = state.following - 1;
            state.following = res < 0 ? state.following : res;
        }
    }
})

export const { avatarAction, nameAction } = userSlice.actions;
export const { incrementFollowers, decrementFollowers, incrementFollowing, decrementFollowing } = statsSlice.actions;
export const userReducer = userSlice.reducer;
export const statsReducer = statsSlice.reducer;
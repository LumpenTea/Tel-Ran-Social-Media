//          STATE
//{
//     avatar: string (url) (change on right click action)
//     name: string (change on left click action)
//     followers: number (decrease and increase actions)
//     following: number (decrease and increase actions)
// }

import { AVATAR, FOLLOWERS_DECREASE, FOLLOWERS_INCREASE, FOLLOWING_DECREASE, FOLLOWING_INCREASE, NAME } from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case AVATAR: return { ...state, avatar: action.payload ? action.payload : state.avatar };
        case NAME: return { ...state, name: action.payload ? action.payload : state.name };
        case FOLLOWERS_DECREASE:
            const followersResult = state.followers - action.payload;
            return { ...state, followers: followersResult < 0 ? state.followers : followersResult};
        case FOLLOWERS_INCREASE: return {...state, followers: state.followers + action.payload};
        case FOLLOWING_DECREASE:
            const followingResult = state.following - action.payload;
            return {...state, following: followingResult < 0 ? state.following : followingResult};
        case FOLLOWING_INCREASE: return {...state, following: state.following + action.payload};
        default: return state;
    }
}
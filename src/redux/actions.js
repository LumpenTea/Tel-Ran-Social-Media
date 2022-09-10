export const AVATAR = 'AVATAR';
export const NAME = 'NAME';
export const FOLLOWERS_INCREASE = 'FOLLOWERS_INCREASE';
export const FOLLOWERS_DECREASE = 'FOLLOWERS_DECREASE';
export const FOLLOWING_INCREASE = 'FOLLOWING_INCREASE';
export const FOLLOWING_DECREASE = 'FOLLOWING_DECREASE';

export const action = (category, info) => {
    return {
        type: category,
        payload: info
    }
}
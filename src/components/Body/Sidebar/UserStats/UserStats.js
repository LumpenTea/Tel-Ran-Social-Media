import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { action, FOLLOWERS_DECREASE, FOLLOWERS_INCREASE, FOLLOWING_DECREASE, FOLLOWING_INCREASE } from '../../../../redux/actions';
import Avatar from '../Avatar/Avatar'

const UserStats = () => {

    const dispatch = useDispatch();
    const name = useSelector(state => state.name);
    const followers = useSelector(state => state.followers);
    const following = useSelector(state => state.following);

    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {name}
            </div>
            <div className='stats'>
                <div
                    onClick={() => {
                        let number = Number(prompt('Enter followers to increase'));
                        number = number ? number : 0;
                        dispatch(action(FOLLOWERS_INCREASE, number));
                    }}
                    onContextMenu={() => {
                        let number = Number(prompt('Enter followers to decrease'));
                        number = number ? number : 0;
                        dispatch(action(FOLLOWERS_DECREASE, number));
                    }}
                >Followers: {followers}</div>
                <div
                    onClick={() => {
                        let number = Number(prompt('Enter following to increase'));
                        number = number ? number : 0;
                        dispatch(action(FOLLOWING_INCREASE, number));
                    }}
                    onContextMenu={() => {
                        let number = Number(prompt('Enter following to decrease'));
                        number = number ? number : 0;
                        dispatch(action(FOLLOWING_DECREASE, number));
                    }}
                >Following: {following}</div>
            </div>
        </div>
    )
}

export default UserStats
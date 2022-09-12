import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementFollowers, decrementFollowing, incrementFollowers, incrementFollowing } from '../../../../redux/reducers';
import Avatar from '../Avatar/Avatar'

const UserStats = () => {

    const dispatch = useDispatch();
    const { name } = useSelector(state => state.user);
    const { followers, following } = useSelector(state => state.stats);

    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {name}
            </div>
            <div className='stats'>
                <div
                    onClick={() => {
                        dispatch(incrementFollowers());
                    }}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(decrementFollowers());
                    }}
                >Followers: {followers}</div>
                <div
                    onClick={() => {
                        dispatch(incrementFollowing());
                    }}
                    onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(decrementFollowing());
                    }}
                >Following: {following}</div>
            </div>
        </div>
    )
}

export default UserStats
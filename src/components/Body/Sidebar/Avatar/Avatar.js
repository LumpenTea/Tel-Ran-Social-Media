import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { avatarAction, nameAction } from '../../../../redux/reducers';

const Avatar = ({ size }) => {

  const dispatch = useDispatch();
  const { avatar, name } = useSelector(state => state.user);

  return (
    (
      <div>
        <img
          onClick={() => {
            const url = prompt('Enter new url');
            dispatch(avatarAction(url));
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            const name = prompt('Enter new name');
            dispatch(nameAction(name));
          }}
          className={`user-avatar ${size ?? ''}`} src={avatar} alt={name} />
      </div>
    )
  )
}

export default Avatar
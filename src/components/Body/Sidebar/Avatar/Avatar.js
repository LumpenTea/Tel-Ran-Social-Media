import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { action, AVATAR, NAME } from '../../../../redux/actions';

const Avatar = ({ size }) => {

  const dispatch = useDispatch();

  const avatar = useSelector(state => state.avatar);
  const name = useSelector(state => state.name);

  return (
    (
      <div>
        <img
          onClick={() => {
            const url = prompt('Enter new url');
            dispatch(action(AVATAR, url));
          }}
          onContextMenu={() => {
            const name = prompt('Enter new name');
            dispatch(action(NAME, name));
          }}
          className={`user-avatar ${size ?? ''}`} src={avatar} alt={name} />
      </div>
    )
  )
}

export default Avatar
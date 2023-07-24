import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline, id } = friend;
  return (
    <li
      key={id}
      style={{
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        padding: 8,
        border: '1px solid gray',
      }}
    >
      <span
        style={{
          height: '24px',
          width: '24px',
          borderRadius: '50%',
          backgroundColor: isOnline ? 'lightgreen' : 'pink',
        }}
      />
      <img src={avatar} alt={name} width="48px" />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

export default FriendListItem;

import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';

import styles from './FriendList.module.css';

function FriendList(friends) {
  return (
    <div className={styles.profileCard}>
      <h2>Friends</h2>
      <ul>
        {friends.friends.map(friend => (
          <FriendListItem key={friend.id} friend={friend} />
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

export default FriendList;

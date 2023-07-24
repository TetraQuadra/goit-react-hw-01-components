import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';

import styles from './FriendList.module.css';

function FriendList(friends) {
  return (
    <div className={styles.profileCard}>
      <h2>Friends</h2>
      <ul>
        <FriendListItem friends={friends} />
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

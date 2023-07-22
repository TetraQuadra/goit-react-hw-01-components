import React from 'react';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';
import parseFriends from './parseFriends';

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

function FriendList(friends) {
  return (
    <div className={styles.profileCard}>
      <h2 className="title">Friends</h2>
      <ul className="friend-list">{parseFriends(friends)}</ul>
    </div>
  );
}

export default FriendList;
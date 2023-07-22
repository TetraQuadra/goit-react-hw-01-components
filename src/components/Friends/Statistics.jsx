import React from 'react';
import styles from './Friends.module.css';
import PropTypes from 'prop-types';
import generateStats from './generateStats';

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};

function Friends(friends) {
  return (
    <div className={styles.profileCard}>
      <h2 className="title">Friends</h2>
      <ul className="friend-list">{parseFriends(friends)}</ul>
    </div>
  );
}

export default Friends;

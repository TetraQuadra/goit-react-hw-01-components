import React from 'react';
import PropTypes from 'prop-types';

import styles from './Profile.module.css';
function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileInfo}>
        <img className={styles.avatar} src={avatar} alt="userpic" />
        <p className={styles.username}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.profileStats}>
        {Object.keys(stats).map((statKey, index) => (
          <li key={index} className={styles.statCard}>
            <span className={styles.label}>{statKey}</span>
            <span className={styles.quantity}>{stats[statKey]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;

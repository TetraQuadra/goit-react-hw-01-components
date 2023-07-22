import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

Statistics.propTypes = {
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

function Statistics({ username, tag, location, avatar, stats }) {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileInfo}>
        <img className={styles.avatar} src={avatar} alt="userpic" />
        <p className={styles.username}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.profileStats}>{generateStatCards(stats)}</ul>
    </div>
  );
}

export default Statistics;

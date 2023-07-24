import React from 'react';
import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <div className={styles.profileCard}>
      {title && <h2>{title}</h2>}
      <ul className={styles.profileStats}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={styles.statCard}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;

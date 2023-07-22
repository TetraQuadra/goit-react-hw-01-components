import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';
import generateStats from './generateStats';

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

function Statistics({ title, stats }) {
  return (
    <div className={styles.profileCard}>
      {title && <h2>{title}</h2>}
      <ul className={styles.profileStats}>{generateStats(stats)}</ul>
    </div>
  );
}
//

export default Statistics;

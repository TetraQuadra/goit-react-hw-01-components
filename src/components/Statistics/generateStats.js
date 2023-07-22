import styles from './Statistics.module.css';

const generateStats = stats => {
  const statObj = stats.map(({ id, label, percentage }) => (
    <li key={id} className={styles.statCard}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  ));
  return statObj;
};

export default generateStats;

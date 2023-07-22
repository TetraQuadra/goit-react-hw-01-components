import styles from './Profile.module.css';

const generateStatCards = stats => {
  return Object.keys(stats).map((statKey, index) => (
    <li key={index} className={styles.statCard}>
      <span className={styles.label}>{statKey}</span>
      <span className={styles.quantity}>{stats[statKey]}</span>
    </li>
  ));
};

export default generateStatCards;

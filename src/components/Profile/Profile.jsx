import styles from './Profile.module.css';


const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img src={image} alt={name} className={styles.cardImage} />
        <p className={styles.cardName}>{name}</p>
        <p className={styles.cardTag}>@{tag}</p>
        <p className={styles.cardLocation}>{location}</p>
      </div>
      <ul className={styles.cardStats}>
        <li className={styles.cardStatItem}>
          <span className={styles.cardStatLabel}>Followers</span>
          <span className={styles.cardStatValue}>{stats.followers}</span>
        </li>
        <li className={styles.cardStatItem}>
          <span className={styles.cardStatLabel}>Views</span>
          <span className={styles.cardStatValue}>{stats.views}</span>
        </li>
        <li className={styles.cardStatItem}>
          <span className={styles.cardStatLabel}>Likes</span>
          <span className={styles.cardStatValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  )
}

export default Profile;
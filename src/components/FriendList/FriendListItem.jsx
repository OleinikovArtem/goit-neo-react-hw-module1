import styles from './FriendList.module.css';
import clsx from 'clsx';

const FriendListItem = ({ friend }) => {
  const status = friend.isOnline ? 'Online' : 'Offline';

  return (
    <div className={styles.item}>
      <img src={friend.avatar} alt={friend.name} width="48" />
      <p>{friend.name}</p>
      <p className={clsx(styles.smallText, {
        [styles.online]: friend.isOnline,
        [styles.offline]: !friend.isOnline,
      })}>{status}</p>
    </div>
  );
};

export default FriendListItem;
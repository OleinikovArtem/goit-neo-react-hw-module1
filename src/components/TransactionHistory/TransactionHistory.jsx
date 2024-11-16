import styles from './TransactionHistory.module.css';
import TransactionRow from './TransactionRow';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => <TransactionRow key={item.id} {...item} />)}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

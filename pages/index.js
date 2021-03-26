import Card from '../components/Card';
import styles from '../styles/Home.module.css';

export default function Home() {
  return <Card>
  <form className={styles.form}>
      <div className={styles.control}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' required id='name' />
      </div>
      <div className={styles.control}>
          <label htmlFor='email'>Email</label>
          <input type='email' required id='email' />
      </div>
      <div className={styles.control}>
          <label htmlFor='feedback'>Give Feedback</label>
          <textarea required id='feedback' rows={5}></textarea>
      </div>
      <div className={styles.actions}>
          <button>Send Feedback</button>
      </div>
  </form>
  </Card>;
}

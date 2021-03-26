import { useRef } from 'react';

import Card from '../components/Card';
import styles from '../styles/Home.module.css';

export default function Home() {

  const nameRef = useRef();
  const emailRef = useRef();
  const feedBackRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const feedbacc = feedBackRef.current.value;
    console.log({name,email,feedbacc});
  }

  return <div className={styles.container}>
    <Card>
  <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.control}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' required id='name' ref={nameRef}/>
      </div>
      <div className={styles.control}>
          <label htmlFor='email'>Email</label>
          <input type='email' required id='email' ref={emailRef}/>
      </div>
      <div className={styles.control}>
          <label htmlFor='feedback'>Give Feedback</label>
          <textarea required id='feedback' rows={5} ref={feedBackRef}></textarea>
      </div>
      <div className={styles.actions}>
          <button>Send Feedback</button>
      </div>
  </form>
  </Card>
  </div>;
}

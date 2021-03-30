import { useRef } from 'react';

import Card from '../components/Card';
import styles from '../styles/Home.module.css';

export default function Home(props) {
  const nameRef = useRef();
  const emailRef = useRef();
  const feedBackRef = useRef();

  const submitHandler = async(e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const feedbacc = feedBackRef.current.value;
    try {
      const response = await fetch('/api/info', {
        method: 'POST',
        headers : {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,email,feedbacc})
      });
      if(!response.ok) {
        throw new Error('An error occured');
      }
      const resData = await response.json();
      alert(resData.message);
    } catch (error) {
      console.log(error);
    }
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

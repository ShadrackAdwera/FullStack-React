import { useRef, useEffect, useState } from 'react';
import useSWR from 'swr';

import Card from '../components/Card';
import styles from '../styles/Home.module.css';

export default function Home(props) {

  const [allFeedback, setAllFeedBack] = useState(props.data.data);
  const {data, error} = useSWR('http://localhost:3000/api/info');


  useEffect(()=>{
    if(data) {
      setAllFeedBack(data.data);
    }
  },[data])

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
  {allFeedback.length===0? <p>Feedbacc no found</p> : <ul>
    {allFeedback.map(item=><li key={item.id}>{`Name: ${item.name} - ${item.feedbacc}`}</li>)}
  </ul>}
  </div>;
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/info');
  if(!response.ok) {
    return { notFound: true}
  }
  const resData = await response.json();
  return { props: {data: resData}, revalidate:5 } 
}

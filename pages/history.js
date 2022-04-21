import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { SavedDetails } from '../comps/Confirmed';
import NavBar from '../comps/NavBar';

export default function Home() {
    const r = useRouter();
    const { route } = r.query
  
    return (
      <div className={styles.container}>
      <SavedDetails text="{text}"/>
      <NavBar/>  
      </div>
      
    )
  }
  
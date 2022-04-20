import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Text from '../comps/Text.js'
import Confirmed from '../comps/Confirmed';
import { Message } from '../comps/Button';



export default function Home() {
    const r = useRouter();
    const { route } = r.query
  
    return (
      <div className={styles.container}>
      <Confirmed/>
      <div className={styles.buttongrid}>
        <Message/>
      </div>
      </div>
      
    )
  }
  
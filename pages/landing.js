import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Logo from '../comps/Logo.js';
import { Browse } from '../comps/Button';


export default function Home() {
    const r = useRouter();
    const { route } = r.query
  
    return (
      <div className={styles.container}>
        <Logo/>
        <div className={styles.buttongrid}><Browse/></div>
      </div>
    )
  }
  
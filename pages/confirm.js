import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
    const r = useRouter();
    const { route } = r.query
  
    return (
      <div className={styles.container}>
      confirm page here
      </div>
    )
  }
  
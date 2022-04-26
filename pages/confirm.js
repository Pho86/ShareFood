import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Text from '../comps/Text.js'
import ConfirmText from '../comps/ConfirmText';
import { Confirm, Cancel } from '../comps/Button';
import Confirmed from '../comps/Confirmed';
import { Message } from '../comps/Button';
import { categories1, categories2 } from '../data/confirm_content.js';


export default function Home() {
  const r = useRouter();
  const { route } = r.query

  return (
    <div className={styles.container}>
      <ConfirmText  />
      <div className={styles.buttongrid}>
        <Cancel />
        <Confirm />
      </div>
      <Confirmed/>
      <div className={styles.buttongrid}>
      <Message/>
      </div>
    </div>
  )
}
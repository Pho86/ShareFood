import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { SavedDetails } from '../comps/Confirmed';
import NavBar, { HistoryNavbar } from '../comps/NavBar';
import {History} from '../comps/History';
import TutorialText from '../comps/TutorialText';

export default function Home() {
    const r = useRouter();
    const { route } = r.query
  
    return (
      <div className={styles.container}>
      <TutorialText text="History"/>
      <History/>
      <SavedDetails text="{text}"/>
      <div className={styles.buttongrid}>

      <img src="/Placeholder.png" width="400px"/>
      </div>
      {/* temporarily ^ used for testing lol */}
      <HistoryNavbar/>  
      </div>
      
    )
  }
  
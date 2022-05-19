import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { SavedDetails } from '../comps/Confirmed';
import NavBar, { HistoryNavbar } from '../comps/NavBar';
import {History} from '../comps/History';
import { HistoryHeading, MessagesHeading } from'../comps/Text.js';
import { HistoryBox } from '../comps/History';


export default function Home() {
    const r = useRouter();
    const { route } = r.query
  
    return (
      <div className={styles.container}>
      <HistoryHeading/>
      <History/> 
      <SavedDetails text="{text}"/>
      <div className={styles.buttongrid}>
      </div>
      {/* temporarily ^ used for testing lol */}
      <HistoryNavbar/>  

      <HistoryBox>
        
      </HistoryBox>
      </div>

      
    )
  }
  
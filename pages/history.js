import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { SavedDetails } from '../comps/Confirmed';
import NavBar, { HistoryNavbar } from '../comps/NavBar';
import {History, HistoryBox, TotalWeight} from '../comps/History';
import { HistoryHeading, MessagesHeading } from'../comps/Text.js';
import { GetFood } from '../data/order_content';
import Historia from '../data/history_content.json'

export default function Home() {
    const r = useRouter();
    const { route } = r.query

    return (<div className={styles.container}>
      <HistoryHeading/>
      <History/> 
      
      <div className={styles.buttongrid}>
      <TotalWeight/>
      </div>
      <HistoryBox> </HistoryBox>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <HistoryNavbar/>  
      </div>
    )
  }
  
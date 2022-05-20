import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import { SavedDetails } from '../comps/Confirmed';
import NavBar, { HistoryNavbar } from '../comps/NavBar';
import {History, HistoryBox} from '../comps/History';
import { HistoryHeading, MessagesHeading } from'../comps/Text.js';
import { GetFood } from '../data/order_content';
import Historia from '../data/history_content.json'

export default function Home() {
    const r = useRouter();
    const { route } = r.query

    var totalweight = 0;
    // const history = GetFood();

    // for(var i = 0; i<history.length; i++)
    // {
    //   totalweight += history[i].weightunit;
    // }
    return (<div className={styles.container}>
      <HistoryHeading/>
      <History/> 
      {/* <SavedDetails text="{text}"/> */}
      <div className={styles.buttongrid}>
      
      Total = {totalweight}
      
      {/* <img src="/Placeholder.png" width="400px"/> */}
      </div>
      <HistoryBox> </HistoryBox>
      <HistoryNavbar/>  
      </div>
    )
  }
  
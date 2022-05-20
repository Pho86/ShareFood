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

    var totalweight = 0;
    // const history = GetFood();

    // for(var i = 0; i<history.length; i++)
    // {
    //   totalweight += history[i].weightunit;
    // }
    return (<div className={styles.container}>
      <HistoryHeading/>
      <History/> 
      
      <div className={styles.buttongrid}>
      <TotalWeight/>
      {/* You have saved a total of {totalweight}lbs of food from going to waste. */}
      
      {/* <img src="/Placeholder.png" width="400px"/> */}
      </div>
      <HistoryBox> </HistoryBox>
      <HistoryNavbar/>  
      </div>
    )
  }
  
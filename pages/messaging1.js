import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import NavBar, { ChatNavbar } from '../comps/NavBar';
import TutorialText from '../comps/TutorialText';
import { chat } from '../data/chat_content';
import BackButton, { BackAPage } from '../comps/PreviousButton'
import {ChatBox, ProfilePic} from '../comps/MessagePrev';
import { GetFood } from '../data/order_content';
import { HistoryHeading, MessagesHeading } from'../comps/Text.js';

//the page with all your messages
export default function Home() {
    const r = useRouter();
    var { food } = r.query;
    var foo = GetFood();

    
    // if(foo.length >= 1) {
        return (
            <div className={styles.container}>
                <MessagesHeading />
                <div className={styles.chatbox}>
                <ChatBox/>
                </div>
                <ChatNavbar />
    
            </div>
        )
    // }
    // else if (food === undefined) {
    //     return <div className={styles.container}>
    //     <MessagesHeading />
    //     <div className={styles.chatbox}>
            
    //     </div>
    //     <ChatNavbar />

    // </div>
    // }
    // else {
    //     return <div className={styles.container}>
    //     <MessagesHeading />
    //     <div className={styles.chatbox}>
    //     </div>
    //     <ChatNavbar />

    // </div>
    // }
    
}
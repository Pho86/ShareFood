import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import NavBar from '../comps/NavBar';
import Text, { Message, SendIcon } from '../comps/Text';
import { chat } from '../data/chat_content';
import { PersonChat, PersonBubble } from '../comps/Chat';

export default function Home() {
    const r = useRouter();
    const { route } = r.query

    return (
        <div className={styles.container}>
            <div class="chat">
                <div class="message"><PersonBubble></PersonBubble><PersonChat text={chat[0].chat}/>
                </div>
                <div class="message1"><PersonChat text={chat[1].chat}/><PersonBubble name={chat[1].initals}></PersonBubble>
                </div>
                <div class="message"><PersonBubble ></PersonBubble><PersonChat text={chat[2].chat} />
                </div>
            </div>
            <div class="message">
                <Message />
                {/* <SendIcon /> */}
            </div>


            <NavBar></NavBar>
            <p></p>
        </div>
    )
}

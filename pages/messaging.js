import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import NavBar, { ChatNavbar } from '../comps/NavBar';
import Text, { Message, SendIcon, Space } from '../comps/Text';
import { chat } from '../data/chat_content';
import { PersonChat, PersonBubble, MeBubble, MeChat } from '../comps/Chat';

export default function Home() {
    const r = useRouter();
    const { route } = r.query

    return (
        <div className={styles.container}>

            <div className={styles.chat}>
                <div class="message"><PersonBubble></PersonBubble><PersonChat text={chat[0].chat} />
                </div>
                <div class="message1"><MeChat text={chat[1].chat} /><MeBubble name={chat[1].initals}  ></MeBubble>
                </div>
                <div class="message"><PersonBubble ></PersonBubble><PersonChat text={chat[2].chat} />
                </div>
            </div>
            {/*  <Space is temporarily used to move msg box down */}
            <Space />
            <div class="message">
                <Message />
                {/* <SendIcon /> */}
            </div>
            <ChatNavbar></ChatNavbar>
            <p></p>
        </div>
    )
}

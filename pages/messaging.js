import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import NavBar, { ChatNavbar } from '../comps/NavBar';
import Text, { Message, SendIcon, Space } from '../comps/Text';
import { chat } from '../data/chat_content';
import { PersonChat, PersonBubble, MeBubble, MeChat } from '../comps/Chat';
import TutorialText from '../comps/TutorialText';
import BackButton, { BackAPage } from '../comps/PreviousButton';
import foody from '../data/food_content.json';



export default function Home() {
    const r = useRouter();
    var { food } = r.query
    if (food === undefined) {
        food = 0
    }

    return (
        <div className={styles.container}>
            <BackAPage/>
            <TutorialText text={foody[food].name} />
            <div className={styles.chat}>
                <div class="message"><PersonBubble name={foody[food].initals}></PersonBubble><PersonChat text={chat[0].chat} />
                </div>
                <div class="message1"><MeChat text={chat[1].chat} /><MeBubble name={chat[1].initials}  ></MeBubble>
                </div>
                <div class="message"><PersonBubble name={foody[food].initals}></PersonBubble><PersonChat text={chat[2].chat} />
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



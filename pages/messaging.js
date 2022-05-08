import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import NavBar, { ChatNavbar } from '../comps/NavBar';
import Text, { Message, SendIcon, Space } from '../comps/Text';
import { chat } from '../data/chat_content';
import { PersonChat, PersonBubble, MeBubble, MeChat } from '../comps/Chat';
import TutorialText, { Messager } from '../comps/TutorialText';
import BackButton, { BackAPage } from '../comps/PreviousButton';
import foody from '../data/food_content.json';
import { GetFood } from '../data/order_content';
import NewMsg from '../comps/MsgSender.js';



export default function Home() {
    const r = useRouter();
    const foo = GetFood();
    console.log(foo)
    var { food } = r.query
    if (food === undefined) {
        food = 0
    }


    return (
        <div className={styles.container}>
            <BackAPage />
            <Messager />
            <NewMsg />
            <Message />
            <ChatNavbar></ChatNavbar>

        </div>
    )
}



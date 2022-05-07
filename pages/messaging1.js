import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import NavBar, { ChatNavbar } from '../comps/NavBar';
import TutorialText from '../comps/TutorialText';
import { chat } from '../data/chat_content';
import BackButton, { BackAPage } from '../comps/PreviousButton'
import {ChatBox, ProfilePic} from '../comps/MessagePrev';

export default function Home() {
    const r = useRouter();
    const { route } = r.query

    return (
        <div className={styles.container}>
            <BackAPage />
            <TutorialText text="Messages" />
            <div class="chatbox">
            <ChatBox/>
            <ChatBox/>
            </div>
            <ChatNavbar />

        </div>
    )
}
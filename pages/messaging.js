import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import NavBar from '../comps/NavBar';
import Text, { Message, SendIcon } from '../comps/Text';

export default function Home() {
    const r = useRouter();
    const { route } = r.query

    return (
        <div className={styles.container}>
            <Text />
            <div class="message">
                <Message />
                {/* <SendIcon /> */}
            </div>
            <NavBar></NavBar>
            <p></p>
        </div>
    )
}

import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import NavBar, { ChatNavbar } from '../comps/NavBar';
import Text, { Heading } from '../comps/Text';
import TutorialText, { Messager } from '../comps/TutorialText';
import BackButton, { BacktoMessage } from '../comps/PreviousButton';
import foody from '../data/food_content.json';
import { GetFood } from '../data/order_content';
import NewMsg, { MyMsg } from '../comps/MsgSender.js';
import { MessageSend } from '../comps/MsgSender.js';
import { useState } from 'react';


export default function Home() {
    const r = useRouter();
    var { food } = r.query
    if (food === undefined) {
        food = 0
    }

    return (
        <div className={styles.container}>
            <BacktoMessage />
            <Messager />
            <NewMsg />
            <MyMsg />
            <MessageSend />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <ChatNavbar></ChatNavbar>

        </div>
    )
}



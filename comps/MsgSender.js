import styled from 'styled-components';
import { useRouter } from 'next/router';
import { chat, msg } from '../data/chat_content';
import { DownUp } from '../data/animation';
import foody from '../data/food_content.json';
import { ChangeFood, GetFood } from '../data/order_content';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import states from '../data/chat_content'


const NewMsgCont = styled.div`
// background-color: red;
border-radius: 15px;
height: 130px;
width: 100%;
align-items: center;
display: flex;
margin-left: auto;
margin-right: auto;
`
const ProfileCont = styled.div`
`
const Profile = styled.div`
background-color: #FE859C;
display: flex;
width: 80px;
height: 80px;
border-radius: 50%;
margin: auto;
align-items: center;
justify-content:center;
font-size: 30px;
color: white;
`
const Message = styled.div`
background-color: #F9D0B7;
height: 60px;
border-radius: 20px 20px 20px 0px;
padding: 20px;

`
const MsgCont = styled.div`
margin-left: 25px;
`
// these are for user's messages
const MyMsgCont = styled.div`
border-radius: 15px;
height: 130px;
width: 100%;
align-items: center;
display: ${props =>props.display || "flex"};
`
const MsgCont2 = styled.div`
display: flex;
margin-left: auto;
`
const ProfileCont2 = styled.div`
display: flex;
margin-left: 25px;
`
//"ME"'s message
const Message2 = styled.div`
background-color: #FAEAB3;
height: 60px;
border-radius: 20px 20px 0px 20px;
padding: 20px;
display: flex;
`
//profile circle for "ME"
const Profile2 = styled.div`
background-color: #91CEDB;
display: flex;
width: 80px;
height: 80px;
border-radius: 50%;
margin: auto;
align-items: center;
font-size: 30px;
color: white;
justify-content:center;
`
const MBox = styled.div`
width: 90%;
height: 60px;
border-radius: 50px;
border: 1px solid black;
text-align:left;
padding: 15px;
position: absolute;
bottom: 100px;
display: flex;
`
var dis = "none"


export default function NewMsg() {
    const r = useRouter();
    var { food } = r.query
    if (food === undefined) {
        food = 0;
    }
    
    return <NewMsgCont>
        <ProfileCont>
            <Profile>{foody[food].initials}</Profile>
        </ProfileCont>
        <MsgCont>
            <Message>{foody[food].message}</Message>
        </MsgCont>
    </NewMsgCont>
}

export function MessageSend(
    {
        text = "Message",
        img = "/send.svg",
    }
) {
    const r = useRouter();
    return <MBox onClick = { () => {states = ('flex'); console.log(state)}}>
        <MsgPlaceholder>{text}</MsgPlaceholder>
        <Send src={img}></Send>
    </MBox>
}

export function MyMsg(
) {
    const r = useRouter();
    var { food } = r.query;
    var states = states;
    console.log(states)
    if (food === undefined) {
        food = 0;
    }
    return <MyMsgCont display={states} className={styles.MsgCont}>
        <MsgCont2>
            <Message2>{foody[food].response}</Message2>
        </MsgCont2>
        <ProfileCont2>
            <Profile2>ME</Profile2>
        </ProfileCont2> 
    </MyMsgCont>
    

    
} 
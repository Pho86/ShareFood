import styled from 'styled-components';
import { useRouter } from 'next/router';
import { chat } from '../data/chat_content';

//the entire message container
const MsgCont = styled.div`
background-color: #F9D0B7;
border-radius: 15px;
height: 130px;
width: 100%;
align-items: center;
display: flex;
margin-left: auto;
margin-right: auto;
`
//the circle
const ProfileCont = styled.div`
display: flex;
background-color: #FE859C;
width: 100px;
height: 100px;
border-radius: 50%;
margin: 25px;
// padding-top: 20px;
`
//the initials inside the circle
const Profile = styled.div`
display: flex;
margin-left: auto;
margin-right: auto;
align-items: center;
font-size: 40px;
color: white;
`
//message text container
const MsgPrevCont = styled.div`
margin-top: -20px;
`
//name of messager
const Name = styled.div`
display: flex;
font-size: 26px;
font-weight: 600;
margin-left: 20px;
margin-bottom: 10px;
`
//preview of msg
const Msg = styled.div`
display:flex;
margin-left: 20px;
`
//time container
const TimeCont = styled.div`
display: flex;
margin-top: -40px;
margin-left: auto;
padding: 25px;
`
const Time = styled.div`
`
export function ChatBox() {
    const r = useRouter();
    return <MsgCont onClick={
        () => r.push({
            pathname: "/messaging"
        })
    }>
        <ProfileCont>
            <Profile>JS</Profile>
        </ProfileCont>
        <MsgPrevCont>
            <Name>{chat[3].name}</Name>
            <Msg>{chat[3].chat}</Msg>
        </MsgPrevCont>
        <TimeCont>
            <Time>Just Now</Time>
        </TimeCont>
    </MsgCont>
}


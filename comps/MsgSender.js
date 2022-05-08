import styled from 'styled-components';
import { useRouter } from 'next/router';
import { chat, msg } from '../data/chat_content';
import { DownUp } from '../data/animation';
import foody from '../data/food_content.json';
import { ChangeFood, GetFood } from '../data/order_content';

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
font-size: 30px;
color: white;
padding-left: 15px;
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
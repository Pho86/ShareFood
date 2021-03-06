import styled from 'styled-components';
import { useRouter } from 'next/router';
import { DownUp } from '../data/animation';
import foody from '../data/food_content.json';
import { ChangeFood, GetFood } from '../data/order_content';

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
animation: ${DownUp} 1.2s;
`
//the circle
const ProfileCont = styled.div`
display: flex;
background-color: ${props => props.backgroundColor || "FE859C"};
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
font-size: 24px;
font-weight: 500;
margin-left: 15px;
margin-bottom: 10px;
`
//preview of msg
const Msg = styled.div`
display:flex;
margin-left: 15px;
`
//time container
const TimeCont = styled.div`
display: flex;
margin-top: -40px;
margin-left: auto;
padding: 25px;
font-size: 16px;
`
const Time = styled.div`
`
const Message = styled.div`
font-weight: 400;
font-size: 18px;
line-height: 32 px;
text-align: center;
position: block;
padding-top: 50px;
padding-bottom: 50px;
left :8%;
right: 8%;
animation: ${DownUp} .2s;
`
export function ChatBox() {
    const r = useRouter();
    const foodList = GetFood();

    if (foodList.length === 0) {
        return <Message>Please select a food to see messages.</Message>
    }

    else {
        return foodList.map((o, i) => {
            return (<MsgCont key={i} onClick={
                () => r.push({
                    pathname: "/messaging",
                    query: {
                        food: [o.index]
                    }
                })
            }>
                <ProfileCont backgroundColor={o.hex}>
                    <Profile >{o.initials}</Profile>
                </ProfileCont>
                <MsgPrevCont>
                    <Name>{o.name}</Name>
                    <Msg>{o.message}</Msg>
                </MsgPrevCont>
                <TimeCont>
                    <Time>{o.confirm_date}</Time>
                </TimeCont>
            </MsgCont>
            )
        })
    }
}


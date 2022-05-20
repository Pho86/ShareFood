import styled from 'styled-components';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import { ChangeDisplay } from './MsgSender';
import { DownUp } from '../data/animation';

const Skip = styled.div`
margin-top: 50px;
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
const MsgPlaceholder = styled.div`
text-align:left;
padding-left: 10px;
padding-top: 5px;
color: #7C7C7C;
display: flex;
margin-right: auto;
`
const Send = styled.img`
margin-left: auto;
align-items: center;
display: flex;
`

const TutBtn = styled.img`
margin-left: auto;
`

const TutBtnCont = styled.div`
margin-top: 50px;
display: flex;
`
const SendCont = styled.div`
`

const HeadingCont = styled.div`
`

const Header = styled.div`
font-weight: 600;
font-size: 30px;
text-align: center;
margin: 10px;
margin-top: 50px;
margin-bottom: 50px;
animation: ${DownUp} .4s;
`
//hover skip button
function skipHover(e) {
    e.target.style.textDecoration = "underline";
  }

function removeSkipHover(e) {
    e.target.style.textDecoration ="none";
}

export default function Text(
    {
        text = "Skip"
    }
) {
    const r = useRouter();
    var {tut } = r.query
    if (tut === '5') {
        return
    }
    return <Skip>
        <button onMouseEnter={skipHover} onMouseLeave={removeSkipHover} className={styles.skip} onClick={
            () => r.push({
                pathname: "/",
                query: {tut: 5}
            })
        }>{text}</button>
    </Skip>
}

export function Message(
    {
        text = "Message",
        img = "/send.svg",
        real = 'none'
    }
) {
    const r = useRouter();
    return <MBox onClick = { () => {real='flex'; console.log(real)}}>
        <MsgPlaceholder>{text}</MsgPlaceholder>
        <Send src={img}></Send>
    </MBox>
}

export function SendIcon(
    {
        img = "/send.svg"
    }
) {
    const r = useRouter();
    return <SendCont>
        <Send src={img} >
        </Send>
        {/* {array.map((o, i) => <Send src={img} onClick={() => ChangeMessage(o, qnum)}>{o}</Send>)} */}
    </SendCont>
}

export function TutorialPage(){
    return <div>
    <h1>What is Share Food?</h1>
    </div>
}
    
export function TutButton(
    {
    img = "/icons/tutorialbutton.svg"
    }
) {
    const r = useRouter();
    var {tut} = r.query 
    
    if (tut === '5') {
        return <TutBtnCont>
        <TutBtn src={img} onClick={
            () => r.push({
                pathname: "/"
            })
        }></TutBtn>
    </TutBtnCont>
    }
    
}

export function HistoryHeading({
    text="History"
}){
    const r = useRouter();
    return  <HeadingCont>
        <Header>{text}</Header>
    </HeadingCont>
}
export function MessagesHeading({
    text="Messages"
}){
    const r = useRouter();
    return  <HeadingCont>
        <Header>{text}</Header>
    </HeadingCont>
}

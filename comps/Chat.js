import styled from 'styled-components';
import { useRouter } from 'next/router';
import { chat } from '../data/chat_content';

const ChatCont = styled.span`
`;

const PersonIcon = styled.div`
text-align: center;
background-color: ${props => props.backgroundcolor || "#FE859C"};
border-radius:50%;
padding:1.5rem;
font-size:1.6rem;
flex-grow:0;
`;


const ChatBox = styled.div`
display:flex;
gap:20px;
justify-content:center;
height:5rem;
width:30rem;
`

const ChatText = styled.p`
padding:1em;
border-radius:${props => props.borderRadius || "20px 20px 20px 0px"};
background:${props => props.backgroundcolor || "#F7C4A5"};
`

export function PersonChat({
    text = ""
}) {

    return <ChatCont>
        <ChatText>{text}</ChatText></ChatCont>
}

export function PersonBubble({
    name = "JS"
}) {

    return <PersonIcon>{name}</PersonIcon>
}

export function MeBubble({
    name="ME"
}) {
    return <PersonIcon backgroundcolor = "#91CEDB">{name}</PersonIcon>
}

export function MeChat({
    text = ""
}) {

    return <ChatCont>
        <ChatText backgroundcolor = "#FAEAB3" borderRadius="20px 20px 0px 20px">{text}</ChatText></ChatCont>
}

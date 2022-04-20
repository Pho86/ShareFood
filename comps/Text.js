import styled from 'styled-components';
import { useRouter } from 'next/router';
const Skip = styled.div`
`
const MBox = styled.div`
width: 340px;
height: 60px;
top: 730px;
border-radius: 50px;
border: 1px solid black;
text-align:left;
padding: 15px;
color: #7C7C7C;
margin-left: auto;
margin-right: auto;
`
const Send = styled.img`
margin-left: auto;
margin-right: auto;
display: flex;
position: relative;
margin-left: auto;
margin-right: auto;
`
const SendCont = styled.div`
`
export default function Text(
    {
        text = "Skip"
    }
) {
    const r = useRouter();
    return <Skip>
        <button class="skip" onClick={
            () => r.push({
                pathname: "/landing"
            })
        }>{text}</button>
    </Skip>
}

export function Message(
    {
        text = "Message"
    }
) {
    const r = useRouter();
    return <MBox>
        {text}
    </MBox>
}

export function SendIcon(
    {
        img = "/send.svg"
    }
) {
    const r = useRouter();
    return <SendCont>
        <Send src={img}>
        {/* onClick={ () => */}
        </Send>
    </SendCont>
}

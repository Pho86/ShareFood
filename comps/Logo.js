import styled from 'styled-components';
import {useRouter} from 'next/router';

const LogoCont = styled.div`
`

const Logo = styled.img`
width: 300px;
height: 300px;
display: flex;
margin-left: auto;
margin-right: auto;
opacity: 0;
animation: revealText 1s forwards;
`

export default function Landing({
    img = "/logo.svg"
}) {
    const r = useRouter();
    return <LogoCont>
        <Logo src={img}/>
    </LogoCont>
}

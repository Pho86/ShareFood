import styled from 'styled-components';
import {useRouter} from 'next/router';

const LogoCont = styled.div`
`

const Logo = styled.img`
width: 200px;
height: 200px;
display: flex;
margin-left: auto;
margin-right: auto;
`

export default function Landing({
    img = "/logo.svg"
}) {
    const r = useRouter();
    return <LogoCont>
        <Logo src={img}/>
    </LogoCont>
}

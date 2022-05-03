import styled from 'styled-components';
import { useRouter } from 'next/router';
import { DownUp } from '../data/animation';

const LogoCont = styled.div`
`

const Logo = styled.img`
width: 300px;
height: 300px;
display: flex;
margin-left: auto;
margin-right: auto;
animation: ${DownUp} .4s;

`

export default function Landing({
    img = "/logo.svg"
}) {
    const r = useRouter();
    var { tut } = r.query

    if (tut === '5') {
        return <LogoCont>

            <Logo src={img} />
        </LogoCont>
    }

}

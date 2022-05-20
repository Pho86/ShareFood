import styled from "styled-components";
import { useRouter } from "next/router";
import { DownUp } from '../data/animation';

const SlogonHeader2 = styled.div
`
font-weight: 300;
font-size 20px;
text-align: center;
padding-top: 3em;
padding-bottom: 3em;
animation: ${DownUp} .9s;
`


export default function SlogonHeader(){
    const r = useRouter();
    var { tut } = r.query
    if (tut === '5') {
        return <SlogonHeader2>Reduce Waste, Share the taste</SlogonHeader2>
    }
}





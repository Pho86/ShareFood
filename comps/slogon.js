import styled from "styled-components";
import { useRouter } from "next/router";

const SlogonHeader2 = styled.div
`
font-weight: 300;
font-size 20px;
text-align: center;
padding-top: 3em;
padding-bottom: 3em;
`


export default function SlogonHeader(){
    const r = useRouter();
    const { route } = r.query

    return(
        <SlogonHeader2>Reduce Waste, Share the taste</SlogonHeader2>
    )
}





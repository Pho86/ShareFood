import styled from 'styled-components';
import { useRouter } from 'next/router'

const ProgressCont = styled.div`
display:flex;
gap:10px
`;

const Progress = styled.div`
width:25px;
height:25px;
background-color:#F1F1F1;
border-radius:50%;
`

export default function ProgressBar() {
    return <ProgressCont>
        <Progress></Progress>
        <Progress></Progress>
        <Progress></Progress>
        <Progress></Progress>
        <Progress></Progress>
    </ProgressCont>
}
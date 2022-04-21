import styled from 'styled-components';
import { useRouter } from 'next/router'

const ProgressCont = styled.div`
display:flex;
gap:10px;
justify-content:center;
`;

const Progress = styled.div`
width:25px;
height:25px;
background-color:#F1F1F1;
border-radius:50%;
`

const ProgressFill = styled.div`
width:25px;
height:25px;
background-color:#D2D2D2;
border-radius:50%
`

export default function ProgressBar() {
    const r = useRouter();
    var { tut } = r.query;
    if (tut === undefined) {
        tut = 0;
    }
    if (tut === '0') {
        return <ProgressCont>
        <ProgressFill></ProgressFill>
        <Progress></Progress>
        <Progress></Progress>
        <Progress></Progress>
        <Progress></Progress>
    </ProgressCont>

    }
    if (tut === '1') {
        return <ProgressCont>
            <Progress></Progress>
            <ProgressFill></ProgressFill>
            <Progress></Progress>
            <Progress></Progress>
            <Progress></Progress>
        </ProgressCont>

    }
    if (tut === '2') {
        return <ProgressCont>
            <Progress></Progress>
            <Progress></Progress>
            <ProgressFill></ProgressFill>
            <Progress></Progress>
            <Progress></Progress>
        </ProgressCont>

    }
    if (tut === '3') {
        return <ProgressCont>
            <Progress></Progress>
            <Progress></Progress>
            <Progress></Progress>
            <ProgressFill></ProgressFill>
            <Progress></Progress>
        </ProgressCont>

    }
    if (tut === '4') {
        return <ProgressCont>
            <Progress></Progress>
            <Progress></Progress>
            <Progress></Progress>
            <Progress></Progress>
            <ProgressFill></ProgressFill>
        </ProgressCont>

    }
    else {
        return <ProgressCont>
        <ProgressFill></ProgressFill>
        <Progress></Progress>
        <Progress></Progress>
        <Progress></Progress>
        <Progress></Progress>
    </ProgressCont>
    }



}
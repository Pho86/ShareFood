import styled from 'styled-components';
import { useRouter } from 'next/router';
import { DownUp } from '../data/animation';

const ProgressCont = styled.div`
display:flex;
gap:10px;
justify-content:center;
animation: ${DownUp} .8s;
`;

const Progress = styled.div`
width:25px;
height:25px;
background-color:#F1F1F1;
border-radius:50%;
margin-bottom: 2em;
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
        <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 1
            }
        })
    }></Progress>
        <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 2
            }
        })
    }></Progress>
        <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 3
            }
        })
    }></Progress>
        <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 4
            }
        })
    }></Progress>
    </ProgressCont>

    }
    if (tut === '1') {
        return <ProgressCont>
            <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 0
            }
        })
    }></Progress>
            <ProgressFill></ProgressFill>
            <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 2
            }
        })
    }></Progress>
            <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 3
            }
        })
    }></Progress>
            <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 4
            }
        })
    }></Progress>
        </ProgressCont>

    }
    if (tut === '2') {
        return <ProgressCont>
            <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 0
            }
        })
    }></Progress>
            <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 1
            }
        })
    }></Progress>
            <ProgressFill></ProgressFill>
            <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 3
            }
        })
    }></Progress>
            <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 4
            }
        })
    }></Progress>
        </ProgressCont>

    }
    if (tut === '3') {
        return <ProgressCont>
            <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 0
            }
        })
    }></Progress>
            <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 1
            }
        })
    }></Progress>
            <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 2
            }
        })
    }></Progress>
            <ProgressFill></ProgressFill>
            <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 4
            }
        })
    }></Progress>
        </ProgressCont>

    }
    if (tut === '4') {
        return <ProgressCont>
            <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 0
            }
        })
    }></Progress>
            <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 1
            }
        })
    }></Progress>
            <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 2
            }
        })
    }></Progress>
            <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 3
            }
        })
    }></Progress>
            <ProgressFill></ProgressFill>
        </ProgressCont>

    }
    if (tut === '5') {
        return
    }
    else {
        return <ProgressCont>
        <ProgressFill></ProgressFill>
        <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 1
            }
        })
    }></Progress>
        <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 2
            }
        })
    }></Progress>
        <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 3
            }
        })
    }></Progress>
        <Progress onClick={
        () => r.replace({
            query: {
                tut: tut = 4
            }
        })
    }></Progress>
    </ProgressCont>
    }



}
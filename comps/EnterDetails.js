import styled from 'styled-components';
import { useRouter } from 'next/router';
import { categories1, nameoffood, weight, dop, bbd, location, details, names } from '../data/confirm_content.js';
import { DownUp } from '../data/animation';

const DetailsCont = styled.div`
// background-color: pink;
margin: 30px;
`

const DetailBox1 = styled.div`
display: block;
margin-top: 30px;
font-size: 12px;
border: solid;
padding: 12px;
padding-left: 60px;
border-radius: 17px;
color: #5A5353;
animation: ${DownUp} .4s;
`
const DetailBox2 = styled.div`
display: block;
margin-top: 30px;
font-size: 12px;
border: solid;
padding: 12px;
padding-left: 60px;
border-radius: 17px;
color: #5A5353;
animation: ${DownUp} .6s;
`
const DetailBox3 = styled.div`
display: block;
margin-top: 30px;
font-size: 12px;
border: solid;
padding: 12px;
padding-left: 60px;
border-radius: 17px;
color: #5A5353;
animation: ${DownUp} .8s;
`
const DetailBox4 = styled.div`
display: block;
margin-top: 30px;
font-size: 12px;
border: solid;
padding: 12px;
padding-left: 60px;
border-radius: 17px;
color: #5A5353;
animation: ${DownUp} 1s;
`
const DetailBox5 = styled.div`
display: block;
margin-top: 30px;
font-size: 12px;
border: solid;
padding: 12px;
padding-left: 60px;
border-radius: 17px;
color: #5A5353;
animation: ${DownUp} 1.2s;
`
const DetailBox6 = styled.div`
display: block;
margin-top: 30px;
font-size: 12px;
border: solid;
padding: 12px;
padding-left: 60px;
border-radius: 17px;
color: #5A5353;
animation: ${DownUp} 1.4s;
`




export default function Details({
    
}) {
    const r = useRouter();
    return <DetailsCont>
        <DetailBox1>{categories1[0].title}</DetailBox1>  
        <DetailBox2>{categories1[1].title}</DetailBox2>
        <DetailBox3>{categories1[2].title}</DetailBox3>
        <DetailBox4>{categories1[3].title}</DetailBox4>
        <DetailBox5>{categories1[4].title}</DetailBox5>
        <DetailBox6>{categories1[5].title}:</DetailBox6>
    </DetailsCont>
}


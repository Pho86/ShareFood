import styled from 'styled-components';
import { useRouter } from 'next/router';
import { categories1, nameoffood, weight, dop, bbd, location, details, names } from '../data/confirm_content.js';
import { DownUp } from '../data/animation';

const DetailsCont = styled.div`
// background-color: pink;
margin: 30px;
`

const DetailBox1 = styled.div`
display: flex;
margin-top: 30px;
font-size: 12px;
border: solid;
padding: 12px;
padding-left: 20px;
border-radius: 17px;
color: #5A5353;
animation: ${DownUp} .4s;
`
const DetailBox2 = styled.div`
display: flex;
margin-top: 30px;
font-size: 12px;
border: solid;
padding: 12px;
padding-left: 20px;
border-radius: 17px;
color: #5A5353;
animation: ${DownUp} .6s;
`
const DetailBox3 = styled.div`
display: flex;
margin-top: 30px;
font-size: 12px;
border: solid;
padding: 12px;
padding-left: 20px;
border-radius: 17px;
color: #5A5353;
animation: ${DownUp} .8s;
`
const DetailBox4 = styled.div`
display: flex;
margin-top: 30px;
font-size: 12px;
border: solid;
padding: 12px;
padding-left: 20px;
border-radius: 17px;
color: #5A5353;
animation: ${DownUp} 1s;
`
const DetailBox5 = styled.div`
display: flex;
margin-top: 30px;
font-size: 12px;
border: solid;
padding: 12px;
padding-left: 20px;
border-radius: 17px;
color: #5A5353;
animation: ${DownUp} 1.2s;
`
const DetailBox6 = styled.div`
display: flex;
margin-top: 30px;
font-size: 12px;
border: solid;
padding: 12px;
padding-left: 20px;
border-radius: 17px;
color: #5A5353;
animation: ${DownUp} 1.4s;
`

const SIcon1 = styled.img`
display:flex;
position: relative;
padding-right: 20px;
// margin-left: 40px;
// margin-bottom: 50px;
// margin-top: 10px;
animation: ${DownUp} .4s;
`
const SIcon2 = styled.img`
display:flex;
position: relative;
padding-right: 20px;
// margin-left: 40px;
// margin-bottom: 50px;
// margin-top: 10px;
animation: ${DownUp} .6s;
`
const SIcon3 = styled.img`
display:flex;
position: relative;
padding-right: 20px;
// margin-left: 40px;
// margin-bottom: 50px;
// margin-top: 10px;
animation: ${DownUp} .8s;
`
const SIcon4 = styled.img`
display:flex;
position: relative;
padding-right: 20px;
// margin-left: 40px;
// margin-bottom: 50px;
// margin-top: 10px;
animation: ${DownUp} 1s;
`
const SIcon5 = styled.img`
display:flex;
position: relative;
padding-right: 20px;
// margin-left: 40px;
// margin-bottom: 50px;
// margin-top: 10px;
animation: ${DownUp} 1.2s;
`
const SIcon6 = styled.img`
display:flex;
position: relative;
padding-right: 20px;
// margin-left: 40px;
// margin-bottom: 50px;
// margin-top: 10px;
animation: ${DownUp} 1.4s;
`



export default function Details({
    img1 = "/icons/smallicon1.svg",
    img2 = "/icons/smallicon2.svg",
    img3 = "/icons/smallicon3.svg",
    img4 = "/icons/smallicon4.svg",
    img5 = "/icons/smallicon5.svg",
    img6 = "/icons/smallicon6.svg"
}) {
    const r = useRouter();
    return <DetailsCont>
        <DetailBox1>
            <SIcon1 src={img1}></SIcon1>
            {categories1[0].title}
        </DetailBox1>
        <DetailBox2>
            <SIcon2 src={img2}></SIcon2>
            {categories1[1].title}
        </DetailBox2>
        <DetailBox3>
            <SIcon3 src={img3}></SIcon3>
            {categories1[2].title}
        </DetailBox3>
        <DetailBox4>
            <SIcon4 src={img4}></SIcon4>
            {categories1[3].title}
        </DetailBox4>
        <DetailBox5>
            <SIcon5 src={img5}></SIcon5>
            {categories1[4].title}
        </DetailBox5>
        <DetailBox6>
            <SIcon6 src={img6}></SIcon6>
            {categories1[5].title}
        </DetailBox6>
    </DetailsCont>
}

export function SmallIcon({
    img1 = "/icons/smallicon1.svg",
    img2 = "/icons/smallicon2.svg",
    img3 = "/icons/smallicon3.svg",
    img4 = "/icons/smallicon4.svg",
    img5 = "/icons/smallicon5.svg",
    img6 = "/icons/smallicon6.svg",
}) {
    const r = useRouter();
    return <IconCont>
        <SIcon1 src={img1}></SIcon1>
        <SIcon2 src={img2}></SIcon2>
        <SIcon3 src={img3}></SIcon3>
        <SIcon4 src={img4}></SIcon4>
        <SIcon5 src={img5}></SIcon5>
        <SIcon6 src={img6}></SIcon6>
    </IconCont>
}
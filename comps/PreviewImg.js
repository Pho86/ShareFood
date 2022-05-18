import styled from 'styled-components';
import { useRouter } from 'next/router';
import { DownUp } from '../data/animation';

const ImageCont = styled.div`
display: flex;
margin-top: 30px;
margin-bottom: 50px;
`

const PreviewImg = styled.img`
display: flex;
margin-left: auto;
margin-right: auto;
align-items: center;
`
const IconCont = styled.div`
position: absolute;
margin-left: 10px;
`

const SIcon1 = styled.img`
display:flex;
position: relative;
margin-left: 40px;
margin-bottom: 50px;
margin-top: 10px;
animation: ${DownUp} .4s;
`
const SIcon2 = styled.img`
display:flex;
position: relative;
margin-left: 40px;
margin-bottom: 50px;
// margin-top: 10px;
animation: ${DownUp} .6s;
`
const SIcon3 = styled.img`
display:flex;
position: relative;
margin-left: 40px;
margin-bottom: 50px;
// margin-top: 10px;
animation: ${DownUp} .8s;
`
const SIcon4 = styled.img`
display:flex;
position: relative;
margin-left: 40px;
margin-bottom: 50px;
// margin-top: 10px;
animation: ${DownUp} 1s;
`
const SIcon5 = styled.img`
display:flex;
position: relative;
margin-left: 40px;
margin-bottom: 50px;
// margin-top: 10px;
animation: ${DownUp} 1.2s;
`
const SIcon6 = styled.img`
display:flex;
position: relative;
margin-left: 40px;
margin-bottom: 50px;
// margin-top: 5px;
animation: ${DownUp} 1.4s;
`


export default function PrevImg({
    img1="bread1.png",
    img2="bread2.png",
    img3="add1.png"
}) {
    const r = useRouter();
    return <ImageCont>
        <PreviewImg src={img1}></PreviewImg>
        <PreviewImg src={img3}></PreviewImg>
        <PreviewImg src={img3}></PreviewImg>
    </ImageCont>
}

export function SmallIcon({
    img1="/icons/smallicon1.svg",
    img2="/icons/smallicon2.svg",
    img3="/icons/smallicon3.svg",
    img4="/icons/smallicon4.svg",
    img5="/icons/smallicon5.svg",
    img6="/icons/smallicon6.svg",
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
import styled from 'styled-components';
import { useRouter } from 'next/router';

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

const SIcon = styled.img`
display:flex;
position: relative;
// background-color:red;
margin-left: 40px;
margin-bottom: 50px;
margin-top: 10px;
`

export default function PrevImg({
    img1="bread1.png",
    img2="bread2.png",
    img3="add1.png"
}) {
    const r = useRouter();
    return <ImageCont>
        <PreviewImg src={img1}></PreviewImg>
        <PreviewImg src={img2}></PreviewImg>
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
        <SIcon src={img1}></SIcon>
        <SIcon src={img2}></SIcon>
        <SIcon src={img3}></SIcon>
        <SIcon src={img4}></SIcon>
        <SIcon src={img5}></SIcon>
        <SIcon src={img6}></SIcon>
    </IconCont>
}
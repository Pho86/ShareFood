import styled from 'styled-components';
import { useRouter } from 'next/router';
import { DownUp } from '../data/animation';
import { GetData, SendData } from '../data/order_content';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { CamConfirm, Cancel2, } from './Button';
import styles from '../styles/Home.module.css';

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
width:300px;
height:400px;
`
const ImgPreview = styled.img`
width:300px;
height:400px;
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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 8,
};
const BButtonCont = styled.button`
font-size:1.1rem;
text-align: center;
background:#FAEAB3;
border:none;
border-radius:15px;
padding:10px 35px 10px 35px;
// animation: ${DownUp} 1s;
`
const ButtonCont = styled.button`
font-size:1.1rem;
text-align: center;
background:#F3CA40;
border:none;
border-radius:15px;
padding:10px 35px 10px 35px;
// animation: ${DownUp} 1s;
`
function changeBackground(e) {
    e.target.style.background = "#C89E12";
}

function removeBackground(e) {
    e.target.style.background = "#F3CA40";
}

function changeBackground2(e) {
    e.target.style.background = "#DFCB87";
}

function removeBackground2(e) {
    e.target.style.background = "#FAEAB3";
}

export default function PrevImg({
    img1 = "bread1.png",
    img2 = "bread2.png",
    img3 = "add1.png"
}) {
    var reader = GetData();
    const r = useRouter();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function previewFile() {
        const preview = document.querySelector('#preview > img');
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            // convert image file to base64 string
            preview.src = reader.result;
            let read = reader.result
            SendData(read)
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    }
    if (reader.length >= 1) {
        return <ImageCont>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <input id="browse" type="file" onChange={previewFile} multiple></input>
                    <div id="preview"> <ImgPreview src="#" /> </div>
                    <div className={styles.padding}>
                        <Cancel2 />
                        <CamConfirm />
                    </div>
                </Box>
            </Modal>
            <PreviewImg src={reader} id="foodimg" onClick={handleOpen}></PreviewImg>
        </ImageCont>
    } else {
        return <ImageCont>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <input id="browse" type="file" onChange={previewFile} multiple></input>
                    <div id="preview"> <ImgPreview src="#" /> </div>
                    <div className={styles.padding}>
                        <BButtonCont onMouseEnter={changeBackground2} onMouseLeave={removeBackground2} onClick={
                            () => { handleClose() }}>
                            Cancel
                        </BButtonCont>
                        <ButtonCont onMouseEnter={changeBackground2} onMouseLeave={removeBackground2} onClick={
                            () => { handleClose() }}> Confirm</ButtonCont>
                    </div>
                </Box>
            </Modal>
            <PreviewImg src={img1} id="foodimg" onClick={handleOpen}></PreviewImg>
        </ImageCont>
    }
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
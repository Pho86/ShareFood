import styled from 'styled-components';
import { useRouter } from 'next/router';
import { DownUp } from '../data/animation';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { CamConfirm, Cancel2 } from './Button';
import styles from '../styles/Home.module.css';



const BtnCont = styled.div`
display:flex;
margin-left: auto;
margin-right: auto;
animation: ${DownUp} .8s;
`
const CameraCont = styled.div`
display:flex;
justify-content: center;
gap: 3em;
animation: ${DownUp} .8s;
`
const GalleryCont = styled.div`
animation: ${DownUp} .8s;
`
const FlipCont = styled.div`
`
const Btn = styled.img`
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

export default function CameraBtn({
    img = "/icons/camerabtn.svg",

}) {
    const r = useRouter();
    const { image } = r.query;

    return <BtnCont>
        <CameraCont onClick={
            () => r.push({
                pathname: "/details"
            })}>
            <Btn src={img}></Btn>
        </CameraCont>
    </BtnCont>
}

export function GalleryBtn({
    img = "/icons/photos_icon.svg"
}) {
    const e = useRouter();
    const { image } = e.query;
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
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    return <BtnCont>
        <GalleryCont>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <input id="browse" type="file" onChange={previewFile} multiple></input>
                    <div id="preview"> <img src="#" /> </div>
                    <div className={styles.padding}>
                        <Cancel2 />
                        <CamConfirm />
                    </div>
                    {/* <input id="upload" type="file" src={img} accept="image/*" multiple />
                    <img class="uploadimg" src="/" />
                    <input type="file" className="filetype" id="group_image" /> */}
                </Box>
            </Modal>
            <Btn src={img} onClick={handleOpen}></Btn>
        </GalleryCont>
    </BtnCont>
}

export function FlipCamBtn({
    img = "/icons/flip_icon.svg"
}) {
    const w = useRouter();
    const { image } = w.query;

    return <BtnCont>
        <FlipCont>
            <Btn src={img}></Btn>
        </FlipCont>
    </BtnCont>
}
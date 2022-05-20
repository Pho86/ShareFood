import styled from 'styled-components';
import { useRouter } from 'next/router';
import { DownUp } from '../data/animation';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { CamConfirm, Cancel2 } from './Button';
import styles from '../styles/Home.module.css';
import { Flip1, Flip2 } from '../data/animation';
import { SendData, EmptyData } from '../data/order_content';


const BtnCont = styled.div`
display:flex;
margin-left: auto;
margin-right: auto;
padding-top: 20px;
animation: ${DownUp} 1s;
`
const CameraCont = styled.div`
display:flex;
justify-content: center;
gap: 3em;
padding-top: 20px;
animation: ${DownUp} 1s;
`
const GalleryCont = styled.div`
animation: ${DownUp} 1s;
padding-top: 20px;
`
const FlipCont = styled.div`
padding-top: 20px;
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

const Div1 = styled.div`
background-color: transparent;
width: 350px;
height: 600px;
perspective: 1000px;
`
const Div2 = styled.div`
position: relative;
transition: transform 0.6s;
transform-style: preserve-3d;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
animation:${Flip1} 0.5s;
`
const Div3 = styled.div`
position: absolute;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
`
const Div4 = styled.div`
position: absolute;
width: 100%;
height: 100%;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
`
const PreviewImg = styled.img`
width:250px;
height:400px;
`
const BButtonCont = styled.button`
font-size:1.1rem;
text-align: center;
background:#FAEAB3;
border:none;
border-radius:15px;
padding:10px 35px 10px 35px;
// animation: ${DownUp} 1s;
`
function changeBackground2(e) {
    e.target.style.background = "#DFCB87";
}

function removeBackground2(e) {
    e.target.style.background = "#FAEAB3";
}

export default function CameraBtn({
    img = "/icons/camerabtn.svg",

}) {
    const r = useRouter();
    const { image } = r.query;

    return <BtnCont>
        <CameraCont onClick={
            () => {
                r.push({
                    pathname: "/details"
                })
                EmptyData();
            }}>
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
            let read = reader.result
            SendData(read)
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
                    <div id="preview"> <PreviewImg src="#" /> </div>
                    <div className={styles.padding}>
                        <BButtonCont onMouseEnter={changeBackground2} onMouseLeave={removeBackground2} onClick={
                            () => { handleClose() }}>
                            Cancel
                        </BButtonCont>
                        <CamConfirm />
                    </div>
                </Box>
            </Modal>
            <Btn src={img} onClick={handleOpen}></Btn>
        </GalleryCont>
    </BtnCont>
}

export function FlipCamBtn({
    img = "/icons/flip_icon.svg"
}) {
    const r = useRouter();
    var { camera } = r.query;
    if (camera === undefined) {
        camera = 0;
    }
    // const [flip, setFlip] = useState(false);

    // const flipOn = () => setFlip(true);
    // const flipOff = () => setFlip(false);
    // i gave up on this

    return <BtnCont>
        <FlipCont>
            {/* <Btn src={img} onClick={(o) => { setFlip(!flip) }}></Btn>
            <Btn src={img} style={{ transform: flip ? "rotateY(180deg)" : "rotate(0deg)" }}></Btn> */}
            <Btn src={img} onClick={() => {
                r.push({
                    query: { camera: Number(camera) + 1 },

                    // camera: Number(camera) + 1 > cam.length - 1? 0 : Number(camera) + 1
                    // }
                })
            }} />
        </FlipCont>
    </BtnCont>
}

export function FakeCamera({
    img = "/fakecamera.png"
}) {
    const r = useRouter();
    var { camera } = r.query;
    // if (camera === undefined){
    //     camera = 0;
    if (camera % 2 === 0) {
        img = "/fakecamera.png"
    }
    if (camera % 2 === 1) {
        img = "/fakecamera2.png"
    }
    return <Div1 className={styles.flip_card}>
        <Div2 className={styles.flip_card_inner}>
            <Div3 className={styles.flip_card_front}>
                <img src={img}
                    height="600px"
                ></img>
            </Div3>
            {/* <Div4 className={styles.flip_card_back}>
                <img src={cam[camera].back}
                    height="600px"

                ></img>
            </Div4> */}
        </Div2>
    </Div1>
}
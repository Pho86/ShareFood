import styled from 'styled-components';
import {useRouter} from 'next/router';

const BarCont = styled.div`
position:absolute;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
text-align: center;
bottom:0;
display:flex;
justify-content:center;
`

const Img = styled.img`
padding: 30px 40px 30px 40px;
background-color:#F1F1F1;

`


export default function NavBar({
}){
    const r = useRouter();
    const {route} = r.query;    

    return <BarCont>
        <Img src="/icons/home.svg" onClick={
            () => r.push({
                pathname: "/home",
                // query: {
                //   type: "notcoded"
                // }
              })
        } id="active"></Img>
        <Img src="/icons/history.svg" onClick={
            () => r.push({
                pathname: "/history",
                // query: {
                //   type: "historynotcoded"
                // }
              })
        }></Img>
        <Img src="/icons/camera.svg" onClick={
            () => r.push({
                //pathname: "/camera",
                query: {
                  type: "cameranotcoded"
                }
              })
        }></Img>
        <Img src="/icons/messages.svg" onClick={
            () => r.push({
                pathname: "/messaging",
                // query: {
                //   type: "notcoded"
                // }
              })
        }></Img>
    </BarCont>
}


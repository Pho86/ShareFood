import styled from "styled-components";
import { useRouter } from "next/router";
import foody from '../data/food_content.json';
import { DownUp } from '../data/animation';

const ImageText1 = styled.div`
    position: absolute;
    font-size: 24px;
    font-weight: 500;
    color: white;   
    margin-top:-170px;  
    height: 170px;
    background: linear-gradient(0deg, #000000 20%, rgba(0, 0, 0, 0) 100%);
    padding: 15px; 
    width: 356px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    animation: ${DownUp} .4s;
`

const ImageText2 = styled.div
    `
    position: absolute;
    margin: 0 auto;
    font-weight: 300;
    font-size: 20px;
    color: white;   
    margin-top:-137px;
    // margin-left: -100px;
    padding: 15px;
    text-align: left;
    width: 22rem;
    animation: ${DownUp} .4s;
    
`

const ImageText3 = styled.div
    `
   position: absolute;
   margin: 0 auto;
   font-size:16px;
   color: #E3E3E3;   
   padding: 5px;
   margin-left: -1em;
   margin-top:-97px;
   width: 20rem;
   line-height: 20px;
   animation: ${DownUp} .4s;
`

const Background = styled.img`
    width: 355px;
    height: 100px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top:-100px;
    `


export function ImageText({
}) {
    const r = useRouter();
    var { food } = r.query
    if (food === undefined) {
        food = 0
    }

    return (
        <ImageText1>{foody[food].food}</ImageText1>
    )
}

export function ImageTextInfo({
}) {
    const r = useRouter();
    var { food } = r.query
    if (food === undefined) {
        food = 0
    }

    return (
        <ImageText2>{foody[food].name} | {foody[food].location} </ImageText2>
    )
}

export function ImageTextComment({
}) {
    const r = useRouter();
    var { food } = r.query
    if (food === undefined) {
        food = 0
    }

    return (
        <ImageText3>"{foody[food].description}"</ImageText3>
    )
}


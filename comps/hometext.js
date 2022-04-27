import styled from "styled-components";
import { useRouter } from "next/router";

const ImageText1 = styled.div`
    position: relative;
    font-size: 24px;
    font-weight: 550;
    color: white;   
    margin-top:-120px;  
    position: relative;
    background: linear-gradient(0deg, #000000 14.72%, rgba(0, 0, 0, 0) 105%);
    padding: 15px; 
    width: 356px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
`

const ImageText2 = styled.div
`
    position: absolute;
    margin: 0 auto;
    font-weight: 300;
    font-size: 20px;
    color: white;   
    margin-top:-4.5em;
    margin-left: -7em;
    padding: 15px;
    
`

const ImageText3 = styled.div
`
   position: absolute;
   margin: 0 auto;
   font-size:16px;
   color: #E3E3E3;   
   padding: 5px;
   margin-left: 6em;
   margin-top:-50px;
`
const Black = styled.div`
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
    text="Peanut Butter"
}) {
    const r = useRouter();
    
    const { image } = r.query
    if ( image === '0') {
        text="Peanut Butter"
    }
    if ( image === '1') {
        text="Box of Cereal"
    }
    if ( image === '2') {
        text="Egg Carton"
    }
    if ( image === '3') {
        text="Instant Noodles"
    }
    if ( image === '4') {
        text="Soy Sauce"
    }

    return(
       <ImageText1>{text}</ImageText1>
    )
}

export function ImageTextInfo({
    text="Jessica Smith | Burnaby"
}) {
    const r = useRouter();
    
    const { image } = r.query
    if ( image === '0') {
        text="Amy Mo | Vancouver"
    }
    if ( image === '1') {
        text="Chad Bruno | Langley"
    }
    if ( image === '2') {
        text="Li Lee | New Westminister"
    }
    if ( image === '3') {
        text="Hope Chen | Richmond"
    }
    if ( image === '4') {
        text="Jessica Smith | Burnaby"
    }

    return(
       <ImageText2>{text}</ImageText2>
    )
}

export function ImageTextComment({
    text="“Opened, but never used. Forgot my kid has a nut allergy.”"
}) {
    const r = useRouter();
    
    const { image } = r.query
    if ( image === '0') {
        text="“Opened, but never used. Forgot my kid has a nut allergy.”"
    }
    if ( image === '1') {
        text="“Never opened. My mom sent me a box of cereal, think she forgot that I’m lactose intolerant.”"
    }
    if ( image === '2') {
        text="“1 egg gone. My kid recently turned vegan, I completely forgot about that. Has been complaining about the eggs and wants us to give it away.”"
    }
    if ( image === '3') {
        text="“Thought instant noodles were easy to cook. I almost burned my house down trying to cook these. Willing to give multiple packs of Instant Noodles.”"
    }
    if ( image === '4') {
        text="“Never opened. My roommate is dumb. She bought another thing of Soy Sauce when we already have full 3 bottles.”"
    }

    return(
       <ImageText3>{text}</ImageText3>
    )
}

export function TextBackground({
    // img = "/tempbg.png"
}) {
    const r = useRouter();
    return <Black>
        {/* <Background src={img}/> */}
    </Black>
}

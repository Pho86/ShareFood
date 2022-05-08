import styled from "styled-components";
import { useRouter } from "next/router";
import { DownUp } from '../data/animation';
import foody from '../data/food_content.json';


const TutorialTitle2 = styled.div`
font-weight: 600;
font-size: 30px;
text-align: center;
margin: 10px;
animation: ${DownUp} .4s;
`
const TutorialSubTitle2 = styled.div`
font-weight: 300;
font-size: 16px;
text-align: center;
line-height: 25px;
padding-bottom: 20px;
width: 70%;
align-items: center;
margin-left: auto;
margin-right: auto;
animation: ${DownUp} .6s;
`

const TutorialSubTitleBold2 = styled.div
    `
padding-top: 2em;
padding-bottom: 1em;
font-weight: 600;
font-size 20px;
text-align: center;
animation: ${DownUp} 1s;
`

const MsgName = styled.div`
font-weight: 600;
font-size: 30px;
text-align: center;
line-height: 25px;
padding-bottom: 2em;
width: 22rem;
align-items: center;
margin-left: auto;
margin-right: auto;
animation: ${DownUp} .6s;
`



export default function TutorialTitle({
    text = "What is ShareFood?"
}) {
    const r = useRouter();

    const { tut } = r.query
    if (tut === '0') {
        text = "What is ShareFood?"
    }
    if (tut === '1') {
        text = "Share and Save Today"
    }
    if (tut === '2') {
        text = "How To: Receive Food"
    }
    if (tut === '3') {
        text = "How to: Share Food"
    }
    if (tut === '4') {
        text = "Enjoy!"
    }
    if (tut === '5') {
        return
    }

    return (
        <TutorialTitle2>{text}</TutorialTitle2>
    )
}

export function TutorialTitleInfoBold({
    text = "Find the Right Food"
}) {
    const r = useRouter();

    const { tut } = r.query
    if (tut === '0') {
        text = ""
    }
    if (tut === '1') {
        text = ""
    }
    if (tut === '2') {
        text = "Find the Right Food"
    }
    if (tut === '3') {
        text = "Post a Listing"
    }
    if (tut === '4') {
        text = "Save the Planet"
    }
    if (tut === '5') {
        return
    }
    const { route } = r.query
    return (
        <TutorialSubTitleBold2>{text}</TutorialSubTitleBold2>
    )
}


export function TutorialTitleInfo({
    text = "“Reduce waste, share the taste.”"
}) {
    const r = useRouter();

    const { tut } = r.query
    if (tut === '0') {
        text = ""
    }
    if (tut === '1') {
        text = "Reduce waste, share the taste."
    }
    if (tut === '2') {
        text = "In the Browse Food section, you can browse through various foods, and decide which one you want."
    }
    if (tut === '3') {
        text = "Take a picture of your food and fill out the details of it to give away."
    }
    if (tut === '4') {
        text = ""
    }
    if (tut === '5') {
        return
    }
    const { route } = r.query
    return (
        <TutorialSubTitle2>{text}</TutorialSubTitle2>
    )
}

export function TutorialSubTitle({
    text = "With ShareFood, you can prevent food from being wasted away for free!"
}) {
    const r = useRouter();

    const { tut } = r.query
    if (tut === '0') {
        text = "With ShareFood, you can prevent food from being wasted away for free!"
    }
    if (tut === '1') {
        text = "Decide whether you want to give away food or receive food."
    }
    if (tut === '2') {
        text = "After deciding which one you want, go to a designated pick-up location and pick up your food!"
    }
    if (tut === '3') {
        text = "When someone chooses your listing, you can message them to confirm details like when to meet in person."
    }
    if (tut === '4') {
        text = `With every food that's given away, you prevent it from being wasted. `
    }
    if (tut === '5') {
        return
    }

    const { route } = r.query
    return (
        <TutorialSubTitle2>{text}</TutorialSubTitle2>
    )
}

export function TutorialSecondLine({
    text = ""
}) {
    const r = useRouter();

    const { tut } = r.query
    if (tut === '0') {
        text = ""
    }
    if (tut === '1') {
        text = ""
    }
    if (tut === '2') {
        text = ""
    }
    if (tut === '3') {
        text = ""
    }
    if (tut === '4') {
        text = " We hope you have a good time with Share Food and eat well!"
    }
    if (tut === '5') {
        return
    }

    const { route } = r.query
    return (
        <TutorialSubTitle2>{text}</TutorialSubTitle2>
    )
}

//title of the messager's name
export function Messager({

}) {
    const r = useRouter();
    var { food } = r.query
    if ( food === undefined){
        food = 0;
    }
    return <MsgName onClick={
        () => r.push({
            query: {
                food: [confirm]
            }
        })
    }>{foody[food].name}</MsgName>
}

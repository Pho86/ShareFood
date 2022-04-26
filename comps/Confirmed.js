import styled from 'styled-components';
import { useRouter } from 'next/router'
import { categories1, nameoffood, weight, dop, bbd, location, details, names } from '../data/confirm_content.js';

const IList = styled.div`
list-style: none;
display: block;
margin-left: auto;
margin-right: auto;
`
const TList = styled.div`
list-style: none;
line-height: 3em;
font-weight: bold;
display: block;
margin-left: auto;
margin-right: auto;
`
const TextCont = styled.div`
display: flex;
line-height: 3em;
gap: 4em;
`
const SelectedItem = styled.div`
font-weight: 400;
font-size: 24px;
line-height: 32 px;
align-items: center;
text-align: center;
position: block;
padding-top: 50px;
padding-bottom: 50px;
// left :8%;
// right: 8%;
`
const Highlight = styled.div`
display: inline-block;
font-weight: 500;
color: #F08A4B;
`

const H2 = styled.div`
font-weight: 400;
font-size 20px;
text-align: left;
margin-right: auto;
margin-left: auto;
padding-bottom: 20px;
`
const H3 = styled.div`
font-weight: 400;
font-size 20px;
text-align: center;
margin-right: auto;
margin-left: auto;
padding-bottom: 20px;
visibility: hidden;
`
const Saved = styled.div`
font-weight: 400;
font-size: 20px;
line-height: 20 px;
text-align: center;
position: block;
left :8%;
right: 8%;
padding-bottom: 3em;
`
const Text = styled.div`
`
export default function ConfirmText() {
    const r = useRouter();
    const { confirm } = r.query
    if (confirm === undefined) {
        return <div></div>
    }
    if (confirm === "1") {
        return (
            <Text>
                        <SelectedItem>
                            Thank you! Your order with
                            <Highlight>&nbsp;{names[4].text}&nbsp;</Highlight>
                            has been confirmed.
                        </SelectedItem>
                <TextCont>
                    <TList>
                        <H2>
                            Order Details
                        </H2>
                        <div class="list">{categories1[0].title}</div>
                        <div class="list two">{categories1[1].title}</div>
                        <div class="list three">{categories1[2].title}</div>
                        <div class="list four">{categories1[3].title}</div>
                        <div class="list five">{categories1[4].title}</div>
                        <div class="list six">{categories1[5].title}:</div>
                    </TList>
                    <IList>
                        <H3>
                            hidden text
                        </H3>
                        <div class="list">{nameoffood[4].text}</div>
                        <div class="list two">{weight[4].text}</div>
                        <div class="list three">{dop[4].text}</div>
                        <div class="list four">{bbd[4].text}</div>
                        <div class="list five">{location[4].text}</div>
                        <div class="list six">{details[4].text}</div>
                    </IList>
                </TextCont>
    
                <Saved>You have saved
                    <Highlight>&nbsp;0.6 lbs&nbsp;</Highlight>
                    of food from going to waste.
                </Saved>
            </Text>
        )
    }

    
}

export function SavedDetails(
    {
        text = "You have saved 5.3 lbs of food from going to waste this month."
    }
) {
    const r = useRouter();
    const { route } = r.query
    
    return (
        <Text>
            <Saved>You have saved
                <Highlight>&nbsp;5.3 lbs&nbsp;</Highlight>
                of food waste from going to waste this month.
            </Saved>
        </Text>
    )
    
}
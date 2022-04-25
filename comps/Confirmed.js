import styled from 'styled-components';
import { useRouter } from 'next/router'

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
                            <Highlight>&nbsp;Jessica&nbsp;</Highlight>
                            has been confirmed.
                        </SelectedItem>
                <TextCont>
                    <TList>
                        <H2>
                            Order Details
                        </H2>
                        <li class="list">Name of Food:</li>
                        <li class="list two">Weight:</li>
                        <li class="list three">Date of Purchase:</li>
                        <li class="list four">Best Before Date:</li>
                        <li class="list five">Meeting Location:</li>
                        <li class="list six">Additional Details:</li>
                    </TList>
                    <IList>
                        <H3>
                            hidden text
                        </H3>
                        <li class="list">Soy Sauce</li>
                        <li class="list two">0.6 lbs</li>
                        <li class="list three">Mar 26, 2022</li>
                        <li class="list four">May 22, 2022</li>
                        <li class="list five">1251 Main St.</li>
                        <li class="list six">"Opened."</li>
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
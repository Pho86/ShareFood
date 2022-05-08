import styled from 'styled-components';
import { useRouter } from 'next/router'
import foody from '../data/food_content.json'
import { categories1, nameoffood, weight, dop, bbd, location, details, names } from '../data/confirm_content.js';
import { DownUp } from '../data/animation';

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
const Line1 = styled.div`
animation: ${DownUp} .4s;
`
const Line2 = styled.div`
animation: ${DownUp} .6s;
`
const Line3 = styled.div`
animation: ${DownUp} .8s;
`
const Line4 = styled.div`
animation: ${DownUp} 1s;
`
const Line5 = styled.div`
animation: ${DownUp} 1.2s;
`
const Line6 = styled.div`
animation: ${DownUp} 1.4s;
margin-bottom: 50px;
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
animation: ${DownUp} .2s;
`
const Highlight = styled.div`
display: inline-block;
font-weight: 500;
color: #F08A4B;
// animation: ${DownUp} .2s;
`

const H2 = styled.div`
font-weight: 400;
font-size 20px;
text-align: left;
margin-right: auto;
margin-left: auto;
padding-bottom: 20px;
animation: ${DownUp} .3s;
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
animation: ${DownUp} 1.5s;
`
const Text = styled.div`
`
export default function ConfirmText() {
    const r = useRouter();
    const { confirm } = r.query
    function FoodSelection() {
        var name = foody[confirm].name;
        var food = foody[confirm].food;
    }
    if (confirm === undefined) {
        return <div></div>
    }
    if (confirm >= "0") {
        return (
            <Text>
                <SelectedItem>
                    Thank you! Your order with
                    <Highlight>&nbsp;{foody[confirm].name}&nbsp;</Highlight>
                    has been confirmed.
                </SelectedItem>
                <TextCont>
                    <TList>
                        <H2>
                            Order Details
                        </H2>
                        <Line1>{categories1[0].title}</Line1>
                        <Line2>{categories1[1].title}</Line2>
                        <Line3>{categories1[2].title}</Line3>
                        <Line4>{categories1[3].title}</Line4>
                        <Line5>{categories1[4].title}</Line5>
                        <Line6>{categories1[5].title}</Line6>
                    </TList>
                    <IList>
                        <H3>
                            hidden text
                        </H3>

                        <Line1>{foody[confirm].food}</Line1>
                        <Line2>{foody[confirm].weight}</Line2>
                        <Line3>{foody[confirm].date_purchase}</Line3>
                        <Line4>{foody[confirm].date_bbd}</Line4>
                        <Line5>{foody[confirm].location}</Line5>
                        <Line6>{foody[confirm].details}</Line6>

                    </IList>
                </TextCont>

                <Saved>You have saved
                    <Highlight>&nbsp;{foody[confirm].weight}&nbsp;</Highlight>
                    of food from going to waste.
                </Saved>
            </Text>
        )
    }


}

export function SavedDetails(
) {
    const r = useRouter();
    const { route } = r.query

    return (
        <Text>
            <Saved>You have saved
                <Highlight>&nbsp;5.2 lbs&nbsp;</Highlight>
                of food waste from going to waste this month.
            </Saved>
        </Text>
    )

}
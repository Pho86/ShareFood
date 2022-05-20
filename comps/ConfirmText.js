import styled from 'styled-components';
import { useRouter } from 'next/router';
import foody from '../data/food_content.json'
import { categories1, nameoffood, weight, dop, bbd, location, details, names } from '../data/confirm_content.js';
import { DownUp } from '../data/animation';

const IList = styled.div`
list-style: none;
display: block;
margin-left: auto;
margin-right: auto;
padding-bottom: 2em;
`
const TList = styled.div`
list-style: none;
line-height: 3em;
font-weight: bold;
display: block;
margin-left: auto;
margin-right: auto;
padding-bottom: 2em;
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
text-align: center;
position: block;
padding-top: 50px;
padding-bottom: 50px;
left :8%;
right: 8%;
animation: ${DownUp} .2s;
`
const Highlight = styled.div`
display: inline-block;
font-weight: 500;
color: #F08A4B;
// animation: ${DownUp} .2s;
`
const ConfirmHeader = styled.div`
`

const H2 = styled.div`
font-weight: 400;
font-size 20px;
text-align: left;
margin-right: auto;
margin-left: auto;
padding-bottom: 20px
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
`
const Text = styled.div`
`

const FoodImg=styled.img`
display:block;
margin-left: auto;
margin-right: auto;
width:30%;
padding-bottom:1em;
@media (max-width: 768px) {
    width:35%;
  }
`

export default function ConfirmText() {
    const r = useRouter();
    var { food } = r.query
    if (food === undefined) {
        return 
    }
        return (
            <Text>
                <ConfirmHeader>
                    <SelectedItem>
                        You have selected
                        <Highlight>
                            &nbsp;{foody[food].food}&nbsp;
                        </Highlight>from
                        <Highlight>
                            &nbsp;{foody[food].name}
                        </Highlight>
                    </SelectedItem>
                </ConfirmHeader>
                <FoodImg src={foody[food].foodimg}></FoodImg>
                <TextCont>
                    <TList>
                        <Line1>{categories1[0].title}</Line1>
                        <Line2>{categories1[1].title}</Line2>
                        <Line3>{categories1[2].title}</Line3>
                        <Line4>{categories1[3].title}</Line4>
                        <Line5>{categories1[4].title}</Line5>
                        <Line6>{categories1[5].title}</Line6>
                    </TList>
                    <IList>
                        <Line1>{foody[food].food}</Line1>
                        <Line2>{foody[food].weight} lbs</Line2>
                        <Line3>{foody[food].date_purchase}</Line3>
                        <Line4>{foody[food].date_bbd}</Line4>
                        <Line5>{foody[food].location}</Line5>
                        <Line6>{foody[food].details}</Line6>
                    </IList>
                </TextCont>
            </Text>
        )
    }


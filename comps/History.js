import styled from 'styled-components';
import { useRouter } from 'next/router';
import historia from '../data/history_content.json';
import { DownUp } from '../data/animation';
import { Box } from '@mui/system';
import { weight } from '../data/confirm_content';

const Chart = styled.img`
width: 320px;
height: 320px;
display: flex;
margin-left: auto;
margin-right: auto;
`

const GraphCont = styled.div`
animation: ${DownUp} .5s;
`

const HistCont = styled.div`
background-color: ${props => props.backgroundcolor || "#EBD792"};
`

const HisCon = styled.div`
background-color: #F9D0B7;
border-radius: 15px;
height: 70px;
width: 70%;
align-items: center;
display: flex;
margin-left: auto;
margin-right: auto;
margin-bottom:10px;
animation: ${DownUp} 1.2s;
`

const ImageCircle = styled.div`
display: flex;
width: 50px;
height: 50px;
border-radius: 50%;
margin: 10px;
position: relative;
overflow: hidden;
border-radius: 50%;
object-fit:cover;
`

const Picture = styled.img`
display: inline;
margin: auto;
height: 150%;
width: auto%;
`

const DateCont = styled.div`
// margin-top: -30px;
// margin-left: -15px;
display: flex;
`

const Date = styled.div`
display: flex;
font-size: 18px;
font-weight: 500;
// margin-left: 20px;
// margin-top; 100px;
white-space: nowrap;
// background-color:red;
text-align: left;
`

const FoodCont = styled.div
    `
display: flex;
// margin-top: 5px;
// margin-left: -135px;
// background-color: blue;
text-align: left;
`

const FoodName = styled.div`
display: flex;
font-size: 14px;
font-weight: 350;
// background-color: white;
// margin-left: -135px;
// margin-top; 10px;
white-space: nowrap;
// text-align: left;
overflow-wrap: break-word;
`

const WeightCont = styled.div
    `
display: flex;
// margin-top: 35px;
// margin-left: -76px;
// background-color: purple;
`

const FoodWeight = styled.div`
display: flex;
font-size: 14px;
font-weight: 250;
// margin-left: -135px;
// margin-top; 10px;
white-space: nowrap;
// background-color: purple;
`

const ContentCont = styled.div`
display:flex;
flex-direction:column;
`
const TotalLBS = styled.div`
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
const Highlight = styled.div`
display: inline-block;
font-weight: 500;
color: #F08A4B;
// animation: ${DownUp} 1.5s;
`

export default function Graph({
    img = "/graph.svg"
}) {
    const r = useRouter();
    return <GraphCont>
        <Chart src={img} />
    </GraphCont>
}

export function History({
    img = "/graph.svg"
}) {
    const r = useRouter();
    return <GraphCont>
        <Chart src={img} />
    </GraphCont>
}

export function HistoryBox() {
    const r = useRouter();
    var { history } = r.query
    if (history === undefined) {
        history = 0;
    }

    return historia.map((o,i)=> {
        return <HisCon key={i}>
            <ImageCircle>
                <Picture src={o.foodimg} alt="Avatar" />
            </ImageCircle>
            <ContentCont>
                <DateCont>
                    <Date>{o.date}</Date>
                </DateCont>
                <FoodCont>
                    <FoodName>{o.food}</FoodName>
                </FoodCont>
                <WeightCont>
                    <FoodWeight>{o.weight} lbs saved</FoodWeight>
                </WeightCont>
            </ContentCont>
        </HisCon>
})
}


export function TotalWeight() {
    const r = useRouter();
    var totalweight = 0;
    
    for (var i = 0; i < historia.length; i++) {
        totalweight += historia[i].weight;
    }
    if (historia.length === 0) {
        return <TotalLBS>
        You have saved a total of
        <Highlight> &nbsp;{totalweight} lbs&nbsp;</Highlight>
        of food from going to waste.
        <br></br>
        <br></br>
        Go find some food!
    </TotalLBS>
    }
    else {
        return <TotalLBS>
        You have saved a total of
        <Highlight> &nbsp;{totalweight} lbs&nbsp;</Highlight>
        of food from going to waste.
    </TotalLBS>
    }
}
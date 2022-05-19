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
margin-top: -30px;
margin-left: -15px;
display: flex;
`

const Date = styled.div`
display: flex;
font-size: 18px;
font-weight: 500;
margin-left: 20px;
margin-top; 100px;
white-space: nowrap;
// background-color:red;
text-align: left;
`

const FoodCont = styled.div
`
display: flex;
margin-top: 5px;
// margin-left: -135px;
// background-color: blue;
text-align: left;
`

const FoodName = styled.div`
display: flex;
font-size: 12px;
font-weight: 250;
// background-color: white;
margin-left: -135px;
margin-top; 10px;
white-space: nowrap;
text-align: left;
overflow-wrap: break-word;
`

const WeightCont = styled.div
`
display: flex;
margin-top: 35px;
// margin-left: -76px;
// background-color: purple;
`

const FoodWeight = styled.div`
display: flex;
font-size: 12px;
font-weight: 250;
margin-left: -135px;
margin-top; 10px;
white-space: nowrap;
// background-color: purple;
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
    date = "March 28, 2022",
    food = "Peanut Butter",
    foodimg = "/peanuthist.png",
    lbs = "0.5lbs saved",
    state = "/receive.svg",
    img = "/graph.svg"
}) {
    const r = useRouter();
    return <GraphCont>
        <Chart src={img} />
    </GraphCont>
}

export function HistoryBox() {
    const r = useRouter();
    var {history} = r.query
    if (history === undefined){
        history = 0;
    }
 
    return <HisCon>
                <ImageCircle>
                <Picture src={historia[history].foodimg} alt="Avatar"/>
                </ImageCircle>
            <DateCont>
                <Date>{historia[history].date}</Date>
            </DateCont>
            <FoodCont>
                <FoodName>{historia[history].food}</FoodName>
            </FoodCont>
            <WeightCont>
                <FoodWeight>{historia[history].lbs}</FoodWeight>    
            </WeightCont>    
    </HisCon>
}
        
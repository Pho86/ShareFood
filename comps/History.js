import styled from 'styled-components';
import { useRouter } from 'next/router';
import history_content from '../data/history_content'
import { DownUp } from '../data/animation';

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
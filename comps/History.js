import styled from 'styled-components';
import {useRouter} from 'next/router';


const Chart = styled.img`
padding-top: 20px;
width: 300px;
height: 300px;
display: flex;
margin-left: auto;
margin-right: auto;
`

const GraphCont = styled.div`

`

export default function Graph({
    img = "/graph.svg"
}) {
    const r = useRouter();
    return <GraphCont>
        <Chart src={img}/>
    </GraphCont>
}

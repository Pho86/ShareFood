import styled from 'styled-components';

const Cont = styled.div`
// s
`;

export default function ImgCard({
    img="/cereal.png"
    
}){ 
    return <Cont>
        <img src={img}/>
        <img src="/eggs.png"></img>
        <img src="/peanutbutter.png"></img>
        <img src="/ramen.png"></img>
        <img src="/soysauce.png"></img>
    </Cont>
}
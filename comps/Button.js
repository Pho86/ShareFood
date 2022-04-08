import styled from 'styled-components';
import {useRouter} from 'next/router'

const ButtonCont = styled.button`
display:flex;
justify-content:center;

background:#F3CA40;
border:none;
border-radius:15px;
padding:10px 35px 10px 35px;

`;

export default function Button({
    text = "Next >"

}) {
    const r = useRouter();
    if (text === "Next >") {
        
    }
    return <ButtonCont onClick={
        ()=>r.push({
          query:{
              route:"tut2"
          }
        })
      }>
          {text}
    </ButtonCont>
}
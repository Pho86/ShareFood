import styled from 'styled-components';
import {useRouter} from 'next/router'

const ButtonCont = styled.button`
display:flex;
background:#F3CA40;
border:none;
border-radius:15px;
padding:10px 35px 10px 35px;
`;

export default function Button() {
    const r = useRouter();
    return <ButtonCont onClick={
        ()=>r.push({
          pathname:"/test",
        })
      }>
        Next {'>'}
    </ButtonCont>
}
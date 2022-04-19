import styled from 'styled-components';
import { useRouter } from 'next/router';
const Skip= styled.div`
`

export default function Text(
    {
        text = "Skip"
    }
){
    const r = useRouter();
    return <Skip>
        <button class="skip" onClick={
            () => r.push({ pathname:"/landing"
        })
        }>{text}</button>
    </Skip>
}

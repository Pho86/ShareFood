import styled from 'styled-components';

const Skip= styled.div`
text-align: center;
`

export default function Text(){
    return <Skip>
        <button class="skip" onClick={
            () => alert("skip tutorial")
        }>Skip</button>
    </Skip>
}

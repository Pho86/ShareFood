import styled, {keyframes} from 'styled-components';

//animation for the list of text details
export const DownUp = keyframes`
from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: none;
  }
`
import styled, {keyframes} from 'styled-components';

//animation for the list of text details
export const DownUp = keyframes`
from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: none;
  }
`

//animation for flip camera
export const Flip1 = keyframes`
from {
  transform: rotateY(180deg);
}
to {
  transform: rotateY(0deg);
}
`

export const Flip2 = keyframes`
from {
  transform: rotateY(0deg);
}
to {
  transform: rotateY(180deg);
}
`
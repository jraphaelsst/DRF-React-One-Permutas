import { keyframes } from 'styled-components'

export const fadeInIcon = keyframes`
  0% {
    opacity: 0;
    transform: translate(0%, -150%);
  }
  100% {
    opacity: 1;
    transform: translate(0%, -45%);
  }
`

export const fadeInDropDown = keyframes`
  0% {
    opacity: 0;
    transform: translate(0%, 150%);
  }
  100% {
    opacity: 1;
    transform: translate(0%, 0%);
  }
`

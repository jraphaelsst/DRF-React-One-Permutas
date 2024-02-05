import { styled } from 'styled-components'

import { color } from '../../styles'

export const ButtonContainer = styled.button`
  padding: 8px 24px 8px 24px;
  margin-top: 16px;
  background-color: transparent;
  border: 2px solid #ddd;
  color: #ddd;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover,
  &:focus {
    background-color: ${color.logoPrimary};
    border: 2px solid ${color.logoPrimary};
    color: ${color.logoSecundary};
    outline: none;
  }
`

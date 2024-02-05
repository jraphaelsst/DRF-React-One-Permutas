import { styled } from 'styled-components'
import { color } from '../../styles'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  padding: 36px 0 36px 0;
  height: fit-content;
  background-color: ${color.logoSecundary};
  border-radius: 6px;
  box-shadow: 0 0 4px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.015);
    box-shadow: 1px 1px 6px;
  }

  a {
    opacity: 0.7;
    color: #eee;
    margin-top: 24px;
    font-size: 14px;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(0.95);
    }

    &:focus {
      transform: scale(1.02);
      outline: none;
      border: 1px solid #ddd;
      padding: 4px;
    }
  }
`

export const Title = styled.h1`
  opacity: 0.8;
  margin-bottom: 32px;
  color: ${color.logoPrimary};
  transition: all 0.5s ease;
  cursor: default;

  &:hover {
    transform: scale(1.05);
  }
`

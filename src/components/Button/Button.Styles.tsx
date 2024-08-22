import styled from 'styled-components';

export const ButtonContainer: any = styled.button`
  display: inline-block;
  text-align: center;
  color: #ffffff;
  font-size: 4.3vmin;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;
  cursor: pointer;
  outline: none;
  padding: 3vmin;
  border-radius: 3vmin;
  border: 1px solid #ACACB64D;
  box-shadow: 0 4px 45px 0 #0000001A;
  background: linear-gradient(225.12deg, rgba(255, 255, 255, 0.31) -19.16%, rgba(255, 255, 255, 0.0713) 99.53%);
  text-decoration: none;

  &:focus {
    box-shadow: none;
  }

  &:hover {
  }

  &:active {
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
  }

`;

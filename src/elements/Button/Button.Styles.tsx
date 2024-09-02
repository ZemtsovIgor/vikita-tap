import styled from 'styled-components';

export const ButtonContainer: any = styled.button`
  display: inline-block;
  text-align: center;
  color: #ffffff;
  border-radius: 3vmin;
  border: 1px solid #b51752;
  background-color: #b51752;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  padding: 2vmin;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;
  cursor: pointer;
  outline: none;
  font-size: 3.5vmin;
  font-weight: 500;
  line-height: 3.5vmin;
  text-decoration: none;

  &:focus {
    color: #ffffff;
  }

  &:hover {
    opacity: .8;
  }

  &:active {
    opacity: .8;
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    opacity: .7;
  }
`;

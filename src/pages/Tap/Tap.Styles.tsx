import styled from 'styled-components';

export const TapContainer: any = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #000000;

  .tap {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0;
    
    &-header {
      padding: 4vmin 4.5vmin 4vmin;
    }
    
    &-content {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      border: 2px solid #3D83C0;
      border-top-left-radius: 5vmin;
      border-top-right-radius: 5vmin;
      box-shadow: 0 10px 70px 0 #3D83C0 inset;
    }
    
    &-bottom {
      display: flex;
      justify-content: center;
      margin-bottom: 5.5vmin;
    }
  }
`;
export const Balance: any = styled.div<{ balancelength?: number; }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 5vmin;
  margin-top: 7.5vmin;

  .balance {
    font-size: 8vmin;
    font-weight: 900;
    line-height: 8vmin;
    text-align: center;
    color: #fff;
    width: ${props => props.balancelength ? props.balancelength * 7 : 0}vmin;
    
    &-img {
      width: 11vmin;
      height: auto;
      margin-right: 2vmin;
    }
  }
`;

export const Energy: any = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .energy {
    font-size: 3.5vmin;
    font-weight: 400;
    line-height: 3.5vmin;
    color: #ffffff;
    
    &-img {
      width: 7vmin;
      height: auto;
      margin-right: 1vmin;
    }
  }
`;

import styled from 'styled-components';

export const HomeContainer: any = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 3vmin 4.5vmin 0;
  
  .home {
    &-bottom {
      display: flex;
      margin-bottom: 2vmin;
    }
  }
`;
export const Balance: any = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 5vmin;
  margin-top: 5vmin;

  .balance {
    font-size: 8vmin;
    font-weight: 600;
    line-height: 8vmin;
    text-align: center;
    color: #fff;
    
    &-img {
      width: 8vmin;
      height: auto;
      margin-right: 3vmin;
    }

    &-text {
      font-size: 4.8vmin;
      font-weight: 400;
      line-height: 4.8vmin;
      text-align: center;
      color: #43434A;
      margin-top: 4vmin;
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
      width: 5vmin;
      height: auto;
      margin-right: 1vmin;
    }
  }
`;

export const Maintanence: any = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  
  span {
    color: #fff;
  };
`;

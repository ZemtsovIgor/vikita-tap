import styled from 'styled-components';

export const Balance: any = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 11vmin;
  margin-top: 1vmin;

  .balance {
    font-size: 14vmin;
    font-weight: 600;
    line-height: 14vmin;
    letter-spacing: 0.4000000059604645px;
    text-align: center;
    color: #EAEBF5;

    & .gray {
      font-size: 6vmin;
      font-weight: 400;
      line-height: 6vmin  ;
      letter-spacing: 0.4000000059604645px;
      color: #43434A;
    }

    &-text {
      font-size: 4.8vmin;
      font-weight: 400;
      line-height: 4.8vmin;
      text-align: center;
      color: #43434A;
      margin-top: 4vmin;

      &.-description {
        font-size: 3.7vmin;
        font-weight: 400;
        line-height: 5vmin;
        margin-top: 3vmin;
      }
    }
  }
`;

export const EnergyList: any = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4vmin;
  padding: 0 2vmin;

  .energy {
    &-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      box-shadow: 0 4px 45px 0 #0000001A;
      border: 1px solid #ACACB64D;
      background: linear-gradient(225.12deg, rgba(255, 255, 255, 0.31) -19.16%, rgba(255, 255, 255, 0.0713) 99.53%);
      border-radius: 3vmin;
      padding: 4vmin;
      
      &__icon {
        font-size: 10vmin;
      }

      &__avatar {
        width: 13vmin;
        height: 13vmin;
        min-width: 12vmin;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 4vmin;
        
        &_img {
          width: 100%;
          height: 100%;
        }
      }

      &__content {
        display: flex;
        flex-direction: column;
        margin-left: 0;

        &.-center {
          margin-right: auto;
        }
        
        &_title {
          display: block;
          font-size: 4.6vmin;
          font-weight: 500;
          line-height: 4.6vmin;
          letter-spacing: -0.4000000059604645px;
          color: #FFFFFF;
        }
        &_description {
          display: block;
          margin-top: 1vmin;
          font-size: 4vmin;
          font-weight: 400;
          line-height: 4vmin;
          letter-spacing: -0.23000000417232513px;
          color: #43434A;
        }
        &_text {
          display: block;
          font-size: 4.2vmin;
          font-weight: 400;
          line-height: 5vmin;
          letter-spacing: -0.4000000059604645px;
          color: #EAEBF4;
        }
      }
    }
  }
`;

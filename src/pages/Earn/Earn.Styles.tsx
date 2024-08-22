import styled from 'styled-components';

export const Balance: any = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1vmin 2vmin 11vmin 2vmin;

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

    &-btn {
      width: 100%;
      height: 13vmin;
      margin-top: 10vmin;
    }
  }
`;

export const TasksList: any = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4vmin 1vmin 0;
  background: linear-gradient(225.12deg, rgba(255, 255, 255, 0.14) -19.16%, rgba(255, 255, 255, 0.0322) 99.53%);
  border-top-right-radius: 3vmin;
  border-top-left-radius: 3vmin;
  border: 1px solid #ACACB64D;
  box-shadow: 0 4px 45px 0 #0000001A;
  flex-grow: 1;
  margin: 0 1px;

  .tasks {
    &-title {
      font-size: 3.5vmin;
      font-weight: 400;
      line-height: 4vmin;
      letter-spacing: -0.07999999821186066px;
      color: #FFFFFF;
      text-transform: uppercase;
    }
    &-list {
      display: flex;
      flex-direction: column;
      gap: 6vmin;
      overflow: hidden;
      height: calc(50% - 13vmin);
      padding: 5.5vmin 0;
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        display: none;
      }
    }
    &-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      
      &__icon {
        display: block;
        font-size: 7vmin;
        margin-right: 4vmin;
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

    &-btn {
      width: 21vmin;
      padding: 3vmin 0;
      margin-right: 1vmin;
    }
    
    &-empty {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      flex-grow: 1;
      color: #43434A;
      text-align: center;
      
      &-content {
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      &__icon {
        display: block;
        font-size: 15vmin;
      }
      
      &__title {
        display: block;
        font-size: 4.7vmin;
        font-weight: 400;
        line-height: 4.7vmin;
        color: #43434A;
        margin-top: 3vmin;
      }

      &__text {
        display: block;
        font-size: 3.7vmin;
        font-weight: 400;
        line-height: 5vmin;
        margin-top: 3vmin;
      }
    }
  }
`;

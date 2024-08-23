import styled from 'styled-components';

export const FriendsWrap: any = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  //flex: 1 1 auto;
  
  .friends {
    &-wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 3vmin 4.5vmin 0;
    }

    &-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 1;
      margin-top: 2vmin;
      margin-bottom: 2.5vmin;
      overflow: hidden;
      
      &__description {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 1.5vmin;
        
        &_title {
          font-size: 3.75vmin;
          font-weight: 500;
          line-height: 3.75vmin;
          letter-spacing: -0.30000001192092896px;
          color: #FFFFFF;
        }
        
        &_side {
          display: flex;
          align-items: center;
        }

        &_text {
          font-size: 2.95vmin;
          font-weight: 400;
          line-height: 2.95vmin;
          letter-spacing: -0.15000000596046448px;
          color: #FFFFFF;
        }
        
        &_icon {
          display: flex;
          margin-left: 2vmin;
          width: 3.25vmin;
          height: 3.25vmin;

          & svg {
            width: 100%;
            height: auto;
          }
        }
      }
      
      &__wrap {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow: hidden;
        overflow-y: scroll;
        gap: 1.2vmin;
      }
    }

    &-friend {
      display: flex;
      padding: 1.5vmin;
      background: #171417;
      border-radius: 1.5vmin;

      &__avatar {
        width: 17.6vmin;
        height: 17.6vmin;
        //background: rgba(60, 60, 67, 0.29);
        border-radius: 1vmin;
        overflow: hidden;

        &_img {
          width: 100%;
          height: auto;
        }
      }

      &__rows {
        display: flex;
        flex: 1;
        flex-direction: row;
        justify-content: space-between;
        padding: 3vmin 2.5vmin;
        
        &_side {
          display: flex;
          flex-direction: column;
        }
      }

      &__title {
        font-size: 3.75vmin;
        font-weight: 500;
        line-height: 3.75vmin;
        letter-spacing: -0.30000001192092896px;
        color: #FFFFFF;
      }

      &__info {
        display: flex;
        align-items: center;
        margin-top: 1vmin;
      }

      &__role {
        font-size: 3vmin;
        font-weight: 400;
        line-height: 3vmin;
        letter-spacing: -0.25px;
        color: #8E8E93;

        &_wrap {
          display: flex;
          align-items: center;
          width: 15.7vmin;
        }
      }

      &__balance {
        display: flex;
        align-items: center;
        font-size: 3vmin;
        font-weight: 600;
        line-height: 3vmin;
        letter-spacing: -0.30000001192092896px;
        color: #FFFFFF;
        
        &_icon {
          margin-right: 1.25vmin;
          width: 4.25vmin;
          height: 4.25vmin;

          & svg {
            width: 100%;
            height: auto;
          }
        }
      }

      &__profit {
        display: flex;
        flex-direction: column;
        margin-top: 2vmin;

        &_title {
          font-size: 3vmin;
          font-weight: 400;
          line-height: 3vmin;
          letter-spacing: -0.15000000596046448px;
          color: #FFFFFF;
        }

        &_value {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-top: 0.75vmin;
          font-size: 3vmin;
          font-weight: 600;
          line-height: 3vmin;
          letter-spacing: -0.30000001192092896px;
          color: #FFFFFF;
        }

        &__icon {
          margin-right: 1vmin;
          width: 4.25vmin;
          height: 4.25vmin;

          & svg {
            width: 100%;
            height: auto;
          }
        }
      }
    }
    
    &-actions {
      display: flex;
      gap: 5vmin;
      padding-bottom: 4vmin;
      margin-top: 4vmin;
      
      &__btn {
        flex: 8;
        text-decoration: none;
        
        &.-copy {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          padding: 0;
        }
        
        &_icon {
          display: flex;
          width: 4vmin;
          height: 4vmin;

          & svg {
            width: 100%;
            height: auto;
          }
        }

        &:before {
          content: 'copied';
          position: absolute;
          top: -150%;
          padding: 10px;
          font-size: 12px;
          line-height: 15px;
          color: #fff;
          background: #4E4F50;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
          border-radius: 1vmin;
          opacity: 0;
          visibility: hidden;
          transition: opacity 1s ease-in-out, visibility 1s ease-in-out;
          transition-delay: 1s;
        }

        &:active {
          &:before {
            opacity: 1;
            visibility: visible;
            content: 'copied';
            transition: opacity 0s ease-in-out, visibility 0s ease-in-out;
            transition-delay: 0s;
          }
        }
      }
    }
  }
`;

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
      padding: 9.5vmin 0 0;
    }
    
    &-header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 4.5vmin;
      
      &__title {
        font-size: 5.2vmin;
        font-weight: 900;
        line-height: 5.2vmin;
        letter-spacing: -0.1vmin;
        text-align: center;
        color: #FFFFFF;
        text-transform: uppercase;
      }
      
      &__description {
        font-size: 3.5vmin;
        font-weight: 500;
        line-height: 3.5vmin;
        letter-spacing: -0.05vmin;
        text-align: center;
        color: #FFFFFF;
        margin: 0;
        margin-top: 3vmin;
      }
    }
    
    &-counts {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1vmin;
      margin-top: 4vmin;
      padding: 0 4.5vmin;
    }
    
    &-count {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 1;
      border: 1px solid #5A5A5A;
      border-radius: 5vmin;
      padding: 0.5vmin 0.5vmin 0.5vmin 3vmin;

      &.-tockens {
        flex: 1.5;
      }
      
      &__title {
        font-size: 2.5vmin;
        font-weight: 500;
        line-height: 2.5vmin;
        letter-spacing: 0.01vmin;
        color: #FFFFFF;
        text-transform: capitalize;
      }
      
      &__container {
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(90deg, #FFD519 0%, #E40592 100%);
        padding: 0.5vmin;
        border-radius: 5vmin;
      }
      
      &__wrap {
        display: flex;
        flex: 1;
        width: 100%;
        height: 100%;
        background: #000000;
        border-radius: 5vmin;
        padding: 1.5vmin 5.2vmin;
      }
      
      &__text {
        font-size: 2.5vmin;
        font-weight: 500;
        line-height: 2.5vmin;
        letter-spacing: 0.01vmin;
        color: #FFFFFF;
        white-space: nowrap;
      }
    }

    &-list {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100px;
      flex-grow: 1;
      margin-bottom: 0;
      overflow: hidden;
      padding: 6.5vmin 5vmin 0;
      
      &__description {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 5.5vmin;
        margin-top: 6vmin;
        
        &_title {
          font-size: 5.5vmin;
          font-weight: 900;
          line-height: 5.5vmin;
          letter-spacing: -0.1vmin;
          color: #FFFFFF;
          text-transform: uppercase;
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
        gap: 0;
      }

      &__container {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        border-top: 2px solid #3D83C0;
        border-top-left-radius: 5vmin;
        border-top-right-radius: 5vmin;
        box-shadow: 0 10px 70px 0 #3D83C0 inset;
      }
    }

    &-friend {
      display: flex;
      flex-direction: column;
      background: linear-gradient(180deg, #3D83C0 0%, rgba(0, 0, 0, 0) 100%);
      border-top-left-radius: 4vmin;
      border-top-right-radius: 4vmin;
      padding: 0.5vmin;
      margin-top: -3vmin;
      
      &:first-child {
        margin-top: 0;
      }
      
      &__container {
        display: flex;
        padding: 4.6vmin 3vmin 7vmin 6vmin;
        background: #000000;
        border-top-left-radius: 4vmin;
        border-top-right-radius: 4vmin;
      }

      &__avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 12.6vmin;
        height: 12.6vmin;
        border-radius: 50%;
        padding: 0.5vmin;
        background: linear-gradient(0deg, #FFD519 0%, rgba(255, 213, 25, 0) 100%);

        &_img {
          width: 12.6vmin;
          height: auto;
          border-radius: 50%;
        }

        &_rank {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #1c1f24;
          color: #FFD519;
          cursor: default;
          font-size: 2.5vmin;
          letter-spacing: -0.30000001192092896px;
          font-weight: 700;
          line-height: 2.5vmin;
          text-align: center;
          
          &_container {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            bottom: 0;
            right: 0;
            width: 4vmin;
            height: 4vmin;
            border-radius: 50%;
            background: linear-gradient(0deg, #FFD519 0%, #E40592 100%);
            padding: 0.6vmin;
            cursor: default;
          }
        }
      }

      &__rows {
        display: flex;
        flex: 1;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0 1.5vmin;
        
        &_side {
          display: flex;
          flex-direction: column;
        }
      }

      &__title {
        font-size: 3.25vmin;
        font-weight: 900;
        line-height: 3.25vmin;
        letter-spacing: -0.1vmin;
        color: #FFFFFF;
        text-transform: uppercase;
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
          font-size: 2.5vmin;
          font-weight: 500;
          line-height: 2.5vmin;
          letter-spacing: 0.1vmin;
          color: #FFFFFF;
          text-transform: lowercase;
        }

        &_value {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-end;
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
      gap: 2vmin;
      margin-top: 4vmin;
      padding: 0 4.5vmin 4vmin;
      
      &__btn {
        flex: 11;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 900;
        font-size: 2.75vmin;
        line-height: 2.75vmin;
        letter-spacing: -0.01vmin;
        background: linear-gradient(90deg, #FFD519 0%, #EED151 100%);
        box-shadow: 4px -4px 4px 0px #B79500 inset;
        color: #000000;
        
        &.-copy {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          background: none;
          border: 0;
          padding: 0;
          margin: 0;
          box-shadow: none;
        }
        
        &_icon {
          display: flex;
          width: 6vmin;
          height: 6vmin;

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

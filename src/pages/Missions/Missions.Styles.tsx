import styled from 'styled-components';

export const MissionsWrap: any = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  //flex: 1 1 auto;
  
  .missions {
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

    &-count {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10vmin;
      border: 1px solid #3D83C0;
      box-shadow: 0 0 8vmin 0 #3D83C0 inset;
      border-radius: 5vmin;
      padding: 5vmin 7vmin;
      
      &__hold {
        padding: 0 4.5vmin;
        margin-top: 6vmin;
      }

      &__title {
        font-size: 2.96vmin;
        font-weight: 900;
        line-height: 2.96vmin;
        letter-spacing: 0.1vmin;
        color: #FFFFFF;
        text-transform: uppercase;

        &_container {
          flex: 1;
        }
      }

      &__container {
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(90deg, #FFD519 0%, #E40592 100%);
        padding: 0.5vmin;
        border-radius: 2vmin;
        
        &_container {
          flex: 1;
        }
      }

      &__wrap {
        display: flex;
        justify-content: center;
        flex: 1;
        width: 100%;
        height: 100%;
        background: #000000;
        border-radius: 2vmin;
        padding: 1.5vmin 5.2vmin;
      }

      &__text {
        font-size: 3.5vmin;
        font-weight: 900;
        line-height: 3.5vmin;
        letter-spacing: 0.01vmin;
        color: #FFD519;
        text-transform: uppercase;
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

      &__title {
        font-size: 5.5vmin;
        font-weight: 900;
        line-height: 5.5vmin;
        letter-spacing: -0.1vmin;
        color: #FFFFFF;
        text-transform: uppercase;
        margin-right: 3vmin;

        &_wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3.5vmin;
          margin-top: 8vmin;
          position: relative;
          padding: 0 4.5vmin;
        }
        
        &_toogler {
          flex: 1;
        }
      }

      &__container {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding: 0 4.5vmin;
      }

      &__wrap {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow: hidden;
        overflow-y: scroll;
        gap: 0;
      }
    }
  }

  .mission {
    display: flex;
    position: relative;
    flex-direction: column;
    background: linear-gradient(180deg, #3D83C0 0%, rgba(0, 0, 0, 0) 100%);
    border-top-left-radius: 4vmin;
    border-top-right-radius: 4vmin;
    padding: 0.5vmin;
    margin-top: -3vmin;
    
    &:first-child {
      margin-top: 0;
    }

    &-badge {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: center;
      background: #3D83C0;
      border-bottom-left-radius: 2vmin;
      border-bottom-right-radius: 2vmin;
      padding: 1.5vmin 1.5vmin 1vmin 4vmin;
      gap: 1.5vmin;

      &__container {
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        width: 100%;
        top: 0;
        left: 0;
      }
      
      &__side {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      
      &__title {
        font-size: 2.5vmin;
        font-weight: 500;
        line-height: 2.5vmin;
        letter-spacing: -0.05vmin;
        color: #ffffff;
      }
      
      &__description {
        font-size: 2.5vmin;
        font-weight: 500;
        line-height: 2.5vmin;
        letter-spacing: -0.05vmin;
        color: #ffffff;
      }
      
      &__icon {
        width: 4vmin;
        height: auto;
      }
    }
    
    &-container {
      display: flex;
      flex-direction: column;
      padding: 8vmin 5vmin 7vmin 5vmin;
      background: #000000;
      border-top-left-radius: 4vmin;
      border-top-right-radius: 4vmin;
    }

    &-rows {
      display: flex;
      flex: 1;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 1.5vmin;
      
      &__side {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }
    }

    &-title {
      font-size: 3.25vmin;
      font-weight: 900;
      line-height: 3.25vmin;
      letter-spacing: -0.1vmin;
      color: #FFFFFF;
      text-transform: uppercase;
      margin-top: 1.2vmin;
    }

    &-description {
      font-size: 2.4vmin;
      font-weight: 500;
      line-height: 2.4vmin;
      color: #FFFFFF;
      margin: 0;
      padding: 0;
      margin-top: 1vmin;
    }

    &-reward {
      font-size: 3.25vmin;
      font-weight: 900;
      line-height: 3.25vmin;
      letter-spacing: -0.15vmin;
      color: #FFD519;
      text-transform: uppercase;
      margin-top: 5vmin;
    }

    &-interval {
      font-size: 1.5vmin;
      font-weight: 500;
      line-height: 1.5vmin;
      letter-spacing: 0.1vmin;
      color: #FFFFFF;
      margin-top: 1vmin;
    }
    
    &-img {
      width: 25vmin;
      height: auto;
    }

    &-actions {
      display: flex;
      gap: 3vmin;
      margin-top: 1.5vmin;

      &__btn {
        flex: 1;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 900;
        font-size: 2.75vmin;
        line-height: 2.75vmin;
        letter-spacing: -0.01vmin;
        background: linear-gradient(90deg, #E40A91 0%, #E40A91 100%);
        box-shadow: 4px -4px 4px 0 #A60069 inset;
        color: #000000;
        border: none;

        &.-check {
          background: linear-gradient(90deg, #3D83C0 0%, #84CBF5 100%);
          box-shadow: 4px -4px 4px 0 #003F75 inset;
        }
      }
    }
  }
`;

import styled from 'styled-components';
import {Button} from "../../elements";
export const HomeContainer: any = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: #000000;
  
  .home {
    display: flex;
    flex-direction: column;
    padding: 10vmin 4.5vmin 3vmin;
    
    &-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      &__img {
        width: 19vmin;
        height: auto;
      }
      
      &__text {
        font-size: 6vmin;
        font-weight: 900;
        line-height: 6vmin;
        letter-spacing: 0.01vmin;
        text-transform: uppercase;
        color: #FFFFFF;
      }
    }
    
    .lab {
      display: block;
      position: relative;
      text-align: center;
      margin-top: 4vmin;
      
      &-img {
        width: 73%;
        height: auto;
      }
      
      &-btn {
        display: block;
        position: absolute;
        bottom: 7vmin;
        background: linear-gradient(90deg, #FFD519 0%, #EED151 100%);
        box-shadow: 4px -4px 4px 0 #B79500 inset;
        font-size: 2.75vmin;
        font-weight: 900;
        line-height: 2.75vmin;
        letter-spacing: 0.01vmin;
        text-align: center;
        color: #000000;
        width: 100%;
        text-transform: uppercase;
        padding: 2.5vmin 0;
        border-radius: 6vmin;
      }
    }
    
    &-bottom {
      display: flex;
      flex-grow: 1;
      align-items: flex-start;
      border-top-left-radius: 5vmin;
      border-top-right-radius: 5vmin;
      background: #000000;
      border: 2px solid #3D83C0;
      box-shadow: 0 10px 70px 0 #3D83C0 inset;
      padding: 9vmin 5vmin;
    }
  }

  .planet {
    display: flex;
    align-items: center;

    &-left {
      flex: 1.3;
    }

    &-right {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      align-items: center;
    }

    &-description {
      &__text {
        font-size: 3.8vmin;
        font-weight: 900;
        line-height: 3.8vmin;
        letter-spacing: 0.07vmin;
        color: #FFFFFF;
        text-transform: uppercase;
      }
    }

    &-img {
      width: 31vmin;
      height: auto;
    }
  }
`;

export const PlanetBtn: any = styled(Button)`
  position: relative;
  margin-top: 3.5vmin;
  background: linear-gradient(90deg, #3D83C0 0%, #E40A91 100%);
  box-shadow: 4px -4px 4px 0px #335783 inset;
  color: #FFFFFF;
  font-size: 3vmin;
  font-weight: 900;
  line-height: 3vmin;
  text-align: center;
  text-transform: uppercase;
  padding: 2vmin 0;
  width: 100%;
  pointer-events: none;
  
  .soon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 13vmin;
    height: 13vmin;
    background: url(data:image/png;base64,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);
    background-repeat: no-repeat;
    background-size: contain;
    top: -2vmin;
    right: -2vmin;

    font-size: 2vmin;
    font-weight: 900;
    line-height: 2vmin;
    color: #000000;
    text-transform: uppercase;
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

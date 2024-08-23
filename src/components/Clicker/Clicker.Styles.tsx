import styled from 'styled-components';

export const ClickerContainer: any = styled.div`
  display: flex;
  flex-grow: 1;
  //cursor: pointer;
  
  .vikita-cl {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: transparent;
    border: 0;
  }
  
  .clicker {
    &-shadow {
      position: absolute;
      top: calc(50% - 5vmin);
      left: calc(50% - 5vmin);
      width: 10vmin;
      height: 10vmin;
      border-radius: 10vmin;
      box-shadow: 0 0 30vmin 26vmin #dae3e9;
    }
    
    &-img {
      width: auto;
      height: calc(100vh - 51vh);
      max-height: 100vw;
      transform: none;
      z-index: 1;
    }
    
    &-sparks {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 2;
    }
    
    &-spark {
      position: absolute;
      opacity: 0;
      top: 50%;
      left: 50%;
      fill: #fff;
    }
  }
`;

export const ClickerSpark: any = styled.div<{ x?: number; y?: number; }>`
  position: absolute;
  top: calc(${props => props.y ? `${props.y}px` : '50%'});
  left: calc(${props => props.x ? `${props.x}px` : '50%'});
  font-size: 11vmin;
  font-weight: 900;
  line-height: 11vmin;
  letter-spacing: 0.4000000059604645px;
  color: #EAEBF5;
  opacity: 1;
`;

export const ClickerSparkText: any = styled.span`
  display: block;
  margin-top: -5.5vmin;
  margin-left: -12vmin;
  font-size: 11vmin;
  font-weight: 900;
  line-height: 11vmin;
  letter-spacing: 0.4000000059604645px;
  color: #EAEBF5;
`;

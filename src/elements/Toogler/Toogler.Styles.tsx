import styled from 'styled-components';

export const TooglerContainer: any = styled.div<{ count?: number; position?: number }>`
  display: inline-block;
  vertical-align: middle;
  border-radius: 4vmin;
  border: 1px solid #5A5A5A;
  position: relative;

  .toogler {
    height: calc(100% - 4vmin);
    width: calc(${props => props.count ? `100% / ${props.count} - 1vmin` : '50%'});
    background: linear-gradient(90deg, #FFD519 0%, #E40592 100%);
    border-radius: 3vmin;
    position: absolute;
    left: calc(${props => props.count && props.position ? `100% / ${props.count} * ${props.position}` : '0.5vmin'});
    top: 1vmin;
    transition: ease-in;
    padding: 1vmin;
    
    &-container {
      border-radius: 3vmin;
      width: 100%;
      height: 100%;
      background: #000000;
    }

    &-badge {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      border-radius: 50%;
      width: 8vmin;
      height: 8vmin;
      top: -2vmin;
      left: -2vmin;
      background: #FFD519;
      z-index: 2;

      &__text {
        font-size: 12px;
        font-weight: 900;
        line-height: 12px;
        letter-spacing: 0.03em;
        color: #000000;
      }
    }
    
    &-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      padding: 0.5vmin;
    }
    
    &-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      z-index: 1;
      overflow: hidden;
    }

    &.-to-left {
      animation-name: toLeft;
      animation-duration: 0.5s;
    }

    &.-to-right {
      animation-name: toRight;
      animation-duration: 0.5s;
    }
    
    &-input {
      display: none;
    }

    &-label {
      padding: 2vmin 0;
      &__text {
        font-size: 16px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0.03em;
        color: #ffffff;
      }
    }
  }

  @keyframes toRight {
    from {
      left: calc(${props => props.count && props.position ? `100% / ${props.count} * ${props.position - 1}` : '0.5vmin'});
    }
    to {
      left: calc(${props => props.count && props.position ? `100% / ${props.count} * ${props.position}` : '0.5vmin'});
    }
  }

  @keyframes toLeft {
    from {
      left: calc(${props => props.count && props.position ? `100% / ${props.count} * ${props.position}` : '0.5vmin'});
    }
    to {
      left: calc(${props => props.count && props.position ? `100% / ${props.count} * ${props.position - 1} + 0.5vmin` : '0.5vmin'});
    }
  }
`;

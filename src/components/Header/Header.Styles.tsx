import styled from 'styled-components';

export const HeaderContainer: any = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .header {
    &-left {
      flex: 3.5;
    }
    &-right {
      &__square {
        width: 30vmin;
        height: 8.5vmin;
        background-color: #171417;
        border-radius: 5vmin;
      }
    }
  }
  
  .user-info {
    align-items: center;
    display: inline-flex;
    flex: 1 1 auto;
    justify-content: center;
    
    &__avatar {
      position: relative;
      flex: 0 0 13vmin;
      height: 13vmin;
      margin-right: 1.5vmin;
      width: 13vmin;
      border-radius: 50%;
      padding: 2px;
      background: linear-gradient(0deg, #FFD519 0%, rgba(255, 213, 25, 0) 100%);

      &_img {
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        width: 100%;
        border-radius: 50%;
      }
    }
    
    &__name {
      color: #ffffff;
      cursor: default;
      font-size: 3vmin;
      font-weight: 900;
      line-height: 3vmin;
      letter-spacing: 0.04vmin;
      text-transform: uppercase;
    }
  }
`;

export const ProgressLine: any = styled.div<{ progress?: number; pointslength?: number; }>`
  flex: 1;
  display: flex;
  
  .progressLine {
    &-container {
      flex: 5;
      display: flex;
      flex-direction: column;
    }
    &-shit {
      flex: 1;
    }
    &-annotation {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &__name {
        font-size: 2vmin;
        font-weight: 600;
        line-height: 2vmin;
        letter-spacing: 0.01vmin;
        color: #fff;
      }
    }
    
    &-wrap {
      position: relative;
      width: 100%;
      height: 1.25vmin;
      border-radius: 4vmin;
      border: 1px solid #FFD519;
      background: #000000;
      margin: 0 auto;
      overflow: hidden;
      margin-top: 0.5vmin;
    }

    &-line {
      height: 100%;
      width: ${props => props.progress ? props.progress : 0}%;
      border-radius: 4vmin;
      background: linear-gradient(90deg, #E40592 0%, #FFD519 100%);
      box-shadow: 0 0 6px #000;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`;


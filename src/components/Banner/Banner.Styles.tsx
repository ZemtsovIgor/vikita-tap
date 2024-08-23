import styled from 'styled-components';

export const BannerContainer: any = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vmin;
  
  .banner {
    &-left {
      
    }
    &-right {
      &__square {
        width: 30vmin;
        height: 8.5vmin;
        background-color: #171417;
        border-radius: 5vmin;
      }
    }
    
    &-link {
      width: 100%;
      text-decoration: none;
    }
    
    &-text {
      color: #ffffff;
      cursor: default;
      font-size: 3.5vmin;
      font-weight: 500;
      line-height: 3.5vmin;
      text-decoration: none;
    }
  }
`;

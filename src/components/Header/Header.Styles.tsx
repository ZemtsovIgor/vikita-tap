import styled from 'styled-components';

export const HeaderContainer: any = styled.div`
  display: flex;
  justify-content: space-between;
  
  .header {
    &-left {}
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
      flex: 0 0 8.5vmin;
      height: 8.5vmin;
      margin-right: 3.5vmin;
      width: 8.5vmin;
      border-radius: 1vmin;
      
      &_img {
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        width: 100%;
      }
      
      &_rank {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: -2vmin;
        right: -2vmin;
        width: 6vmin;
        height: 6vmin;
        border-radius: 8vmin;
        border: 1px solid #ffffff;
        background-color: #1c1f24;
        color: #ffffff;
        cursor: default;
        font-size: 2.5vmin;
        letter-spacing: -0.30000001192092896px;
        font-weight: 700;
        line-height: 2.5vmin;
        text-align: center;
      }
    }
    
    &__name {
      color: #ffffff;
      cursor: default;
      font-size: 3.5vmin;
      letter-spacing: -0.30000001192092896px;
      font-weight: 500;
      line-height: 3.5vmin;
    }
  }
`;

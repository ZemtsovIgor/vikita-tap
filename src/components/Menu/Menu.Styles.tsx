import styled from 'styled-components';

export const MenuContainer: any = styled.div`
  //display: flex;
  //position: sticky;
  //bottom: 0;
  //margin-top: auto;
  padding: 0 4.5vmin 2vmin;
  margin-bottom: 2vmin;
  height: 17vmin;

  .menu {
    &-list {
      height: 14vmin;
      display: flex;
      flex-wrap: wrap;
      margin: 0;
      padding: 1.5vmin;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 4vmin;

      &__link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        text-decoration: none;
        border-radius: 4vmin;

        &:hover {
          opacity: 0.8;
        }
      }

      &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        fill: #707579;

        width: 5vmin;
        height: 5vmin;

        svg {
          max-width: 100%;
          max-height: 100%;
          min-width: 5vmin;
          min-height: 5vmin;
          fill: #ffffff;
        }
      }

      &__text {
        display: block;
        margin-top: 1vmin;
        color: #ffffff;
        cursor: default;
        font-size: 2.75vmin;
        font-weight: 500;
        line-height: 2.75vmin;
      }

      &__item {
        flex: 1;
        height: 100%;
        text-align: center;
        overflow: hidden;
        list-style:none;


        &.-active {
          & .menu-list {
            &__link {
              background: rgba(255, 255, 255, 0.3);
              &:hover {
                opacity: 1;
              }
            }

            &__icon {
              fill: #9747FF;
            }
          }
        }
      }
    }
  }
`;

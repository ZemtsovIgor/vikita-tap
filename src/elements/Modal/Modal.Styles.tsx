import styled from 'styled-components';

export const ModalStyles: any = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  z-index: 9999;

  .modal {
    &__dialog {
      position: relative;
      background: #1C1C1C;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.02);
      width: 100%;
      margin: 0 3vmin;
      border-radius: 3vmin;
      padding: 10vmin 7.5vmin;
      display: none;
      animation: fadeIn 0.5s cubic-bezier(0.65, 0, 0.35, 1);
      overflow: hidden;
      max-width: 722px;

      &.active {
        display: block;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }
  }

  &.modalImproveCard {
    .modal__dialog {
      padding: 5vmin 7.5vmin 7.5vmin;
    }
  }
`;

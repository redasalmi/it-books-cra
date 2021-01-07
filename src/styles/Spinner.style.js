import styled, { keyframes } from 'styled-components';

const scale = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(0.5);
    opacity: 0.5;
  }
`;

const StyledSpinner = styled.div`
  .spinner {
    display: flex;
    justify-content: center;
    height: 40px;

    div {
      width: 40px;
      height: 40px;
      background-color: ${(props) => props.theme.navbarBg};
      border-radius: 50%;
      animation: ${scale} 0.4s linear infinite alternate;
    }

    div:nth-child(2) {
      animation-delay: 0.4s;
    }
  }

  .textMessage {
    text-align: center;
    margin-top: 15px;
  }
`;

export default StyledSpinner;

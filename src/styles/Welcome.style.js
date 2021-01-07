import styled from 'styled-components';

const StyledWelcome = styled.div`
  background-color: ${(props) => props.theme.welcomeBg};
  padding: 15px;

  .container {
    display: flex;
    flex-direction: column;

    h2 {
      text-align: center;
      margin: 5px;
      font-weight: 500;

      &:first-child {
        color: ${(props) => props.theme.blue};
      }
    }
  }
`;

export default StyledWelcome;

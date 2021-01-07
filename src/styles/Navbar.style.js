import styled from 'styled-components';

const StyledNavbar = styled.nav`
  background-color: ${(props) => props.theme.navbarBg};

  .navbar-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    .navbar-logo {
      width: 100%;
      text-align: center;

      a {
        color: ${(props) => props.theme.white};
        font-size: 25px;
        font-weight: bold;

        &:hover {
          color: ${(props) => props.theme.orange};
        }
      }
    }

    .navbar-form {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      width: 100%;

      input {
        width: 80%;
        border: none;
        background-color: ${(props) => props.theme.white};
        font-size: 16px;
        height: 40px;
        padding: 10px;
        border-radius: 5px 0 0 5px;
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border: none;
        background-color: ${(props) => props.theme.red};
        border-radius: 0 5px 5px 0;
        cursor: pointer;

        .search-icon {
          fill: ${(props) => props.theme.white};
          width: 30px;
          height: 30px;
        }

        &:hover {
          background-color: ${(props) => props.theme.darkRed};
        }
      }
    }

    @media (min-width: 520px) {
      flex-direction: row;
      justify-content: space-around;

      .navbar-logo {
        flex: 0 0 20%;
        text-align: left;
      }

      .navbar-form {
        flex: 0 0 80%;
        justify-content: flex-end;
        margin-top: 0;

        input {
          width: 60%;
        }
      }
    }
  }
`;

export default StyledNavbar;

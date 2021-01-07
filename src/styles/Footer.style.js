import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.navbarBg};
  padding: 10px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      flex: 0 0 80%;
      color: ${(props) => props.theme.white};

      a {
        color: ${(props) => props.theme.footerLink};

        &:hover {
          color: ${(props) => props.theme.orange};
        }
      }
    }

    a {
      flex: 0 0 20%;
      text-align: right;

      svg {
        width: 45px;
        height: 45px;

        path {
          fill: ${(props) => props.theme.white};
        }
      }

      &:hover {
        svg {
          path {
            fill: ${(props) => props.theme.orange};
          }
        }
      }
    }
  }
`;

export default StyledFooter;

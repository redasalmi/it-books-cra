import styled from 'styled-components';

const StyledPagination = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .pagination {
    display: flex;
    list-style: none;
    border: 1px solid #c8c8c8;
    border-radius: 5px;

    li.page-item {
      border-color: black;
      border-left: 1px solid #c8c8c8;

      &:first-child {
        border-left: none;
      }

      &.active {
        background-color: ${(props) => props.theme.navbarBg};

        a.page-link {
          color: ${(props) => props.theme.white};
        }
      }

      &.disabled {
        a.page-link {
          cursor: not-allowed;
          color: ${(props) => props.theme.welcomeBg};
        }
      }

      &:hover:not(.active):not(.disabled) {
        background-color: ${(props) => props.theme.welcomeBg};
      }

      a.page-link {
        display: block;
        padding: 10px;
        color: ${(props) => props.theme.black};

        @media (min-width: 500px) {
          padding: 10px 15px;
        }
      }
    }
  }
`;

export default StyledPagination;

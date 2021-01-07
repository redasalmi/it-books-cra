import styled from 'styled-components';

const StyledBooksList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;

  .book-card {
    flex: 0 0 80%;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid black;
    border-radius: 5px;

    margin: 8px;

    cursor: pointer;
    transition: all 0.2s ease-in-out;

    a {
      width: 100%;
      height: 100%;
      padding: 10px;
      text-align: center;
      text-decoration: none;
      color: ${(props) => props.theme.black};

      img {
        transition: transform 0.5s ease-in-out;
      }

      p {
        padding: 0 2px;
      }
    }

    &:hover {
      border: none;
      box-shadow: 1px 1px 3px ${(props) => props.theme.navbarBg};

      img {
        transform: scale(1.2);
      }
    }

    @media (min-width: 576px) {
      flex: 0 0 45%;
    }

    @media (min-width: 992px) {
      flex: 0 0 26%;
    }
  }
`;

export default StyledBooksList;

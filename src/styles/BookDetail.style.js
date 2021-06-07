import styled from 'styled-components';

const StyledBookDetail = styled.div`
  .book-detail-nav {
    display: none;

    ul {
      display: flex;
      list-style: none;

      li:first-child {
        button {
          color: ${(props) => props.theme.blue};
          background-color: transparent;
          border: none;
          cursor: pointer;

          &:hover {
            color: ${(props) => props.theme.black};
          }
        }
      }

      li:nth-child(2) {
        color: ${(props) => props.theme.gray};

        &::before {
          content: '>';
          padding: 0 8px;
        }
      }
    }
  }

  .book-detail {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .img-col {
      flex: 0 0 100%;
      width: 100%;
      text-align: center;

      img {
        width: 300px;
        height: 350px;
        border: 1px solid ${(props) => props.theme.imgBorder} !important;
        background-color: ${(props) => props.theme.imgBg};
      }

      div {
        text-align: center;

        h3:first-child {
          color: ${(props) => props.theme.blue};
          margin: 15px 0;
        }
      }
    }

    .info-col {
      margin-top: 15px;
      flex: 0 0 100%;

      table {
        border-collapse: collapse;

        tbody {
          tr {
            td {
              padding: 14px;

              &:first-child {
                vertical-align: top;
              }
            }

            &:nth-child(odd) {
              background-color: ${(props) => props.theme.bookInfoBg};
            }
          }
        }
      }
    }
  }

  @media (min-width: 450px) {
    .book-detail {
      .img-col {
        flex: 0 0 70%;
        width: 70%;
      }
    }
  }

  @media (min-width: 768px) {
    .book-detail {
      .img-col {
        flex: 0 0 50%;
        width: 50%;
      }
    }
  }

  @media (min-width: 992px) {
    .book-detail-nav {
      display: block;
    }

    .book-detail {
      margin-top: 30px;
      flex-direction: row;
      align-items: flex-start;

      .img-col {
        flex: 0 0 32%;
      }

      .info-col {
        margin-top: 0;
        flex: 0 0 64%;
      }
    }
  }
`;

export default StyledBookDetail;

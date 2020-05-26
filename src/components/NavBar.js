import React, { useState } from "react";
import {
  Navbar,
  NavLink,
  Form,
  Container,
  InputGroup,
  InputGroupAddon,
  Button,
  Label,
  Input,
} from "reactstrap";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const [bookSearch, setBookSearch] = useState("");
  const history = useHistory();
  const handleSearch = (event) => {
    event.preventDefault();
    history.push(`/books/${bookSearch}`);
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Container className="d-flex align-items-center">
          <NavLink
            href="/books"
            className="order-1 col-10 col-md-3 text-white navTitle"
          >
            <h4>IT Books</h4>
          </NavLink>
          <Form
            className="mr-5 order-3 order-md-2 col-12 col-md-7"
            onSubmit={handleSearch}
          >
            <InputGroup>
              <Label placeholder="Search Book" hidden htmlFor="search" />
              <Input
                type="text"
                name="search"
                placeholder="Search books by title, author, ISBN"
                value={bookSearch}
                onChange={(event) => setBookSearch(event.target.value)}
              />
              <InputGroupAddon addonType="append">
                <Button
                  className="bg-danger"
                  onClick={handleSearch}
                  name="Clickable search button icon"
                >
                  <span className="fas fa-search text-white"></span>
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          <NavLink
            href="https://github.com/redasalmi/it-books"
            rel="noreferrer noopener"
            target="_blank"
            className="order-2 col-2 col-md-2"
            aria-label="github repository"
          >
            <span className="fab fa-github fa-3x text-white navTitle"></span>
          </NavLink>
        </Container>
      </Navbar>

      <div className="p-3 subTitle">
        <Container>
          <h2 className="text-primary">Welcome to IT Books</h2>
          <h2 className="text-danger">
            IT, Programming and Computer Science Books
          </h2>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;

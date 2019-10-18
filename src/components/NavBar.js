import React from 'react';
import {
    Navbar,
    NavLink,
    Form,
    Container,
    InputGroup, InputGroupAddon, Button, Input
} from 'reactstrap';


const NavBar = ({ bookSearch, setBookSearch, setShowBookSearch }) => {

    const handleSearch = (event) => {
        setShowBookSearch(true);
        event.preventDefault();
    }

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <Container className="d-flex align-items-center">
                    <NavLink href="/" className="order-1 col-10 col-md-3 text-white navTitle">
                        <h4>IT Books</h4>
                    </NavLink>
                    <Form className="mr-5 order-3 order-md-2 col-12 col-md-7" onSubmit={handleSearch}>
                        <InputGroup>
                            <Input type="text" placeholder="Search books by title, author, ISBN"
                                value={bookSearch} onChange={event => setBookSearch(event.target.value)} />
                            <InputGroupAddon addonType="append">
                                <Button className="bg-danger" onClick={handleSearch}>
                                    <span className="fas fa-search text-white"></span>
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Form>
                    <NavLink href="https://github.com/redasalmi/it-books" target="_blank" className="order-2 col-2 col-md-2">
                        <span className="fab fa-github fa-3x text-white navTitle"></span>
                    </NavLink>
                </Container>
            </Navbar>

            <div className="p-3 subTitle">
                <Container>
                    <h2 className="text-primary">Welcome to IT Books</h2>
                    <h2 className="text-danger">IT, Programming and Computer Science Books</h2>
                </Container>
            </div>
        </div>
    )
}

export default NavBar;
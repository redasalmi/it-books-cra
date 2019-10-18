import React from 'react';
import {
    Breadcrumb, BreadcrumbItem, Table
} from 'reactstrap';


const BookDetail = ({ bookdetail, setShowBooks, setShowBookDetail }) => {

    return (
        <div>
            <Breadcrumb className="bookBreadcrump">
                <BreadcrumbItem onClick={() => {
                    setShowBooks(true);
                    setShowBookDetail(false)
                }} className="homeBreadcrump">
                    It Books
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    {bookdetail.title}
                </BreadcrumbItem>
            </Breadcrumb>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 text-center">
                        <img src={bookdetail.image} alt={bookdetail.title}
                            className="border bg-light" />
                        <h5 className="m-2 text-primary">{bookdetail.title}</h5>
                        <h5 className="m-2 text-primary">{bookdetail.subtitle}</h5>
                    </div>
                    <div className="col-12 col-lg-8">
                        <Table striped borderless>
                            <tbody>
                                <tr>
                                    <td>Title</td>
                                    <td>{bookdetail.title}</td>
                                </tr>
                                <tr>
                                    <td>Subtitle</td>
                                    <td>{bookdetail.subtitle}</td>
                                </tr>
                                <tr>
                                    <td>Authors</td>
                                    <td>{bookdetail.authors}</td>
                                </tr>
                                <tr>
                                    <td>Publisher</td>
                                    <td>{bookdetail.publisher}</td>
                                </tr>
                                <tr>
                                    <td>Year</td>
                                    <td>{bookdetail.year}</td>
                                </tr>
                                <tr>
                                    <td>Pages</td>
                                    <td>{bookdetail.pages}</td>
                                </tr>
                                <tr>
                                    <td>Language</td>
                                    <td>{bookdetail.language}</td>
                                </tr>
                                <tr>
                                    <td>Rating</td>
                                    <td>{bookdetail.rating}/5</td>
                                </tr>
                                <tr>
                                    <td>ISBN-10</td>
                                    <td>{bookdetail.isbn10}</td>
                                </tr>
                                <tr>
                                    <td>ISBN-13</td>
                                    <td>{bookdetail.isbn13}</td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td>{bookdetail.desc}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetail;
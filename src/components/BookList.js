import React from 'react';
import {
    Card, CardImg, CardTitle
} from 'reactstrap';


const BookList = ({ books, fetchBookDetail, release, search }) => {
    if (books.length > 1 && (release || search)) {
        let bookList = books.map(book => (
            <Card className="col-10 col-sm-5 col-md-3 m-2 bookCard" key={book.isbn13}
                onClick={() => fetchBookDetail(book.isbn13)} >
                <CardImg top width="100%" src={book.image} alt={book.isbn13} />
                <CardTitle className="text-center">{book.title}</CardTitle>
            </Card>
        ));
        if (bookList.length >= 1) {
            return (
                <div>
                    {release && <h3>New Releases Books</h3>}
                    {search && <h3>Search Result</h3>}
                    <div className="row d-flex justify-content-center">
                        {bookList}
                    </div>
                </div>
            )
        }
    }
    else {
        return (
            <div></div>
        )
    }
}

export default BookList;
import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import BookDetail from './BookDetail';
import LoadingBook from './LoadingBook'
import axios from 'axios';


const Books = ({ bookSearch, showBookSearch, setShowBookSearch }) => {

    // book list
    const [books, setBooks] = useState([]);
    const [showBooks, setShowBooks] = useState(false);

    // detail for a specific book
    const [bookdetail, setBookDetail] = useState({});
    const [showBookDetail, setShowBookDetail] = useState(false);

    // release & search variables to show a specific search result or new book releases 
    const [release, setRelease] = useState(false);
    const [search, setSearch] = useState(false);

    // loading variable to show loading spinner
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBooks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Url used to activate CORS on the website because the API doesn't support it
    const corsUrl = "https://cors-anywhere.herokuapp.com/"
    // API URL
    const apiUrl = "https://api.itbook.store/1.0/";
    const baseUrl = corsUrl + apiUrl;

    const fetchBooks = (search = "") => {
        setLoading(true);
        setShowBookDetail(false);
        setShowBookSearch(false);

        if (search === "") {
            setRelease(true);
            setSearch(false);

            let url = `/new`;
            axios.get(url, {
                baseURL: baseUrl,
            })
                .then(res => {
                    setBooks(res.data.books);
                    setLoading(false);
                    setShowBooks(true);
                })
                .catch(err => console.log(err));
        }
        else {
            setRelease(false);
            setSearch(true);

            let url = `${baseUrl}/search/${bookSearch}`;
            let getUrl = [];
            for (let page = 1; page <= 5; page++) {
                getUrl.push(`${url}/${page}`)
            }
            axios.all(getUrl.map(url => axios.get(url)))
                .then(axios.spread((...response) => {
                    let bookResult = [];
                    response.forEach(res => {
                        bookResult.push(...res.data.books)
                    })
                    setBooks(bookResult);
                    setLoading(false);
                    setShowBooks(true);
                }))
        }
    }

    const fetchBookDetail = (bookIsbn13) => {
        setLoading(true);
        setShowBooks(false);
        setShowBookDetail(false);
        setShowBookSearch(false);

        let url = `/books/${bookIsbn13}`;
        axios.get(url, {
            baseURL: baseUrl
        })
            .then(res => {
                setBookDetail(res.data);
                setLoading(false);
                setShowBookDetail(true);
            })
            .catch(err => console.log(err))
    }

    const BookSearch = () => {
        fetchBooks(bookSearch);
        return (<div></div>);
    }

    return (
        <div className="container mt-5">
            {showBooks && <BookList books={books} fetchBookDetail={fetchBookDetail}
                release={release} search={search} />}
            {showBookDetail && <BookDetail bookdetail={bookdetail} setShowBooks={setShowBooks}
                setShowBookDetail={setShowBookDetail} />}
            {showBookSearch && <BookSearch />}
            {loading && <LoadingBook />}
        </div>
    )
}

export default Books;
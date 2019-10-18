import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import BookDetail from './BookDetail';
import axios from 'axios';


const Books = ({ bookSearch, showBookSearch, setShowBookSearch }) => {

    const [books, setBooks] = useState([]);
    const [showBooks, setShowBooks] = useState(false);

    const [bookdetail, setBookDetail] = useState({});
    const [showBookDetail, setShowBookDetail] = useState(false);

    const [release, setRelease] = useState(false);
    const [search, setSearch] = useState(false);

    useEffect(() => {
        document.title = "IT Books";
        fetchBooks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const corsUrl = "https://cors-anywhere.herokuapp.com/"
    const apiUrl = "https://api.itbook.store/1.0/";
    const baseUrl = corsUrl + apiUrl;

    const fetchBooks = async (search = "") => {
        if (search === "") {
            setRelease(true);
            setSearch(false);

            let url = `/new`;
            axios.get(url, {
                baseURL: baseUrl,
            })
                .then(res => setBooks(res.data.books))
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
                }))
        }

        setShowBooks(true);
        setShowBookDetail(false);
        setShowBookSearch(false);
    }

    const fetchBookDetail = (bookIsbn13) => {
        let url = `/books/${bookIsbn13}`;
        axios.get(url, {
            baseURL: baseUrl
        })
            .then(res => setBookDetail(res.data))
            .catch(err => console.log(err))

        setShowBooks(false);
        setShowBookDetail(true);
        setShowBookSearch(false);
    }

    const BookSearch = () => {
        fetchBooks(bookSearch);
        return (<div></div>);
    }

    return (
        <div className="container mt-5">
            <div>
                {showBooks && <BookList books={books} fetchBookDetail={fetchBookDetail}
                    release={release} search={search} />}
                {showBookDetail && <BookDetail bookdetail={bookdetail} setShowBooks={setShowBooks}
                    setShowBookDetail={setShowBookDetail} />}
                {showBookSearch && <BookSearch />}
            </div>
        </div>
    )
}

export default Books;
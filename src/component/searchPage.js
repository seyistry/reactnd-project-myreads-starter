import React, { Component } from "react";
// import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";
import BookList from "./bookComponent";

class SearchPage extends Component {
    render() {
        const { query, updateQuery, searchedBooks } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                        Close
                    </Link>

                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) =>
                                updateQuery(event.target.value)
                            }
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchedBooks.filter(books => books.imageLinks !== undefined ).map((books) => (
                            <BookList
                                key={books.id}
                                books={books}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchPage;

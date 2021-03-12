import React, { Component } from "react";
import BookShelfState from "./bookShelfState";
class BookList extends Component {
    render() {
        const { books, updateBook } = this.props;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${
                                    books.imageLinks.thumbnail
                                })`,
                            }}
                        />
                        <div className="book-shelf-changer">
                            <BookShelfState
                                books={books}
                                updateBook={updateBook}
                            />
                        </div>
                    </div>
                    <div className="book-title">{books.title}</div>
                    <div className="book-authors">{books.authors}</div>
                </div>
            </li>
        );
    }
}

export default BookList;

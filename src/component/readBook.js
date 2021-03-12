import React, { Component } from "react";
import BookList from "./bookComponent";

class ReadBook extends Component {
    render() {
        const {shelfBooks, updateBook } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {shelfBooks
                            .filter((books) => books.shelf === "read").map((books) => (
                            <BookList
                                key={books.id}
                                books={books}
                                updateBook={updateBook}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default ReadBook;

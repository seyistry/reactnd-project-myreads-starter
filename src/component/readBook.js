import React, { Component } from "react";
import BookList from "./bookComponent";

class ReadBook extends Component {
    render() {
        const {read, updateBook } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {read.map((books) => (
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

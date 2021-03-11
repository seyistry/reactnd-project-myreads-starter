import React, { Component } from "react";
import BookList from "./bookComponent";

class WantToRead extends Component {
   render() {
        const {wantToRead, updateBook } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {wantToRead.map((books) => (
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

export default WantToRead;

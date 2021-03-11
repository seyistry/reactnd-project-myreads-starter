import React, { Component } from "react";
import BookList from "./bookComponent";

class CurrentlyReading extends Component {
    render() {
        const {currentlyReading, updateBook } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {currentlyReading.map((books) => (
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

export default CurrentlyReading;

import React, { Component } from "react";

class BookShelfState extends Component {
    render() {
        const { books, updateBook } = this.props;
        return (
            
            <select
                value={books.shelf}
                onChange={(event) => updateBook(books, event.target.value)}
            >
                <option value="move" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none" selected>
                    None
                </option>
            </select>
        );
    }
}

export default BookShelfState;

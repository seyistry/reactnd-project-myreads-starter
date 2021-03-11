import React, { Component } from "react";

class BookList extends Component {
    render() {
        const {key, books} = this.props
        return (
            <li key={key}>
                <div className="book">
                    <div className="book-top">
                        <div
                            className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage:
                                    `url(${books.imageLinks.thumbnail})`,
                            }}
                        />
                        <div className="book-shelf-changer">
                            <select>
                                <option value="move" disabled>
                                    Move to...
                                </option>
                                <option value="currentlyReading">
                                    Currently Reading
                                </option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
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

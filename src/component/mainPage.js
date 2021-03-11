import React, { Component } from "react";
import { Link } from "react-router-dom";
import CurrentlyReading from "./currentlyReading";
import WantToRead from "./wantToRead";
import ReadBook from "./readBook";

class MainPage extends Component {
    render() {
        const { wantToRead, currentlyReading, read, updateBook } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <CurrentlyReading currentlyReading={currentlyReading} updateBook={updateBook} />
                        <WantToRead wantToRead={wantToRead} updateBook={updateBook}/>
                        <ReadBook read={read} updateBook={updateBook}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">
                        <button />
                    </Link>
                </div>
            </div>
        );
    }
}

export default MainPage;

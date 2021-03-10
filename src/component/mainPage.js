import React, { Component } from "react";
import { Link } from "react-router-dom";
import CurrentlyReading from "./currentlyReading";
import WantToRead from "./wantToRead";
import ReadBook from "./readBook";

class MainPage extends Component {
    render() {
        const { ToggleSearchBtn } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <CurrentlyReading />
                        <WantToRead />
                        <ReadBook />
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

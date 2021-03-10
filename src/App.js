import React from "react";
import * as BooksAPI from './BooksAPI'
import "./App.css";
import SearchPage from "./component/searchPage";
import MainPage from "./component/mainPage";
import { Route } from "react-router-dom";


class BooksApp extends React.Component {
    constructor() {
        super();
        this.state = {
            currentReading : [],
            wantToRead: [],
            read: [],
            /**
             * TODO: Instead of using this state variable to keep track of which page
             * we're on, use the URL in the browser's address bar. This will ensure that
             * users can use the browser's back and forward buttons to navigate between
             * pages, as well as provide a good URL they can bookmark and share.
             */
            showSearchPage: false,
        };
    }

    // ToggleSearchBtn = (props) => {
    //     return props === 1
    //         ? this.setState({ showSearchPage: true })
    //         : this.setState({ showSearchPage: false });
    // };

    render() {
        return (
            <div className="app">
                {console.log(BooksAPI.get)}
                <Route
                    path="/search"
                    render={() => (
                        <SearchPage ToggleSearchBtn={this.ToggleSearchBtn} />
                    )}
                />
                <Route
                    exact
                    path="/"
                    render={() => (
                        <MainPage ToggleSearchBtn={this.ToggleSearchBtn} />
                    )}
                />
            </div>
        );
    }
}

export default BooksApp;

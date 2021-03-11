import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./component/searchPage";
import MainPage from "./component/mainPage";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
    constructor() {
        super();
        this.state = {
            query: '',
            currentReading: [],
            wantToRead: [],
            read: [],
            searchedBooks: [],
            /**
             * TODO: Instead of using this state variable to keep track of which page
             * we're on, use the URL in the browser's address bar. This will ensure that
             * users can use the browser's back and forward buttons to navigate between
             * pages, as well as provide a good URL they can bookmark and share.
             */
            showSearchPage: false,
        };
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim(),
        }))
        this.search(query);
    };


    search = (query) => {
        if (query.length > 0) {
            BooksAPI.search(query)
                .then((books) => {
                    if (books.error) {
                        this.setState({ searchedBooks: [] });
                    } else {
                        this.setState({ searchedBooks: books });
                    }
                })
                .catch(this.setState({ searchedBooks: [] }));
        } else {
            this.setState({ searchedBooks: [] });
        }
    };

    render() {
        return (
            <div className="app">
                <Route
                    path="/search"
                    render={() => (
                        <SearchPage
                            query={this.state.query}
                            updateQuery={this.updateQuery}
                            searchedBooks={this.state.searchedBooks}
                        />
                    )}
                />
                <Route
                    exact
                    path="/"
                    render={() => (
                        <MainPage
                            updateQuery
                        />
                    )}
                />
            </div>
        );
    }
}

export default BooksApp;

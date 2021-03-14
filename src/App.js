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
            query: "",
            // currentlyReading: [],
            // wantToRead: [],
            // read: [],
            shelfBooks: [],
            searchedBooks: []
            /**
             * TODO: Instead of using this state variable to keep track of which page
             * we're on, use the URL in the browser's address bar. This will ensure that
             * users can use the browser's back and forward buttons to navigate between
             * pages, as well as provide a good URL they can bookmark and share.
             */
            // showSearchPage: false,
        };
    }

    getAllBooks() {
        BooksAPI.getAll().then(shelfBooks => {
            this.setState({
                shelfBooks,
                currentlyReading: shelfBooks.filter(
                    books => books.shelf === "currentlyReading"
                ),
                wantToRead: shelfBooks.filter(
                    books => books.shelf === "wantToRead"
                ),
                read: shelfBooks.filter(books => books.shelf === "read")
            });
        });
    }

    componentDidMount() {
        this.getAllBooks();
    }

    updateQuery = query => {
        this.setState(() => ({
            query: query.replace(/  +/g, " ")
        }));
        this.search(query);
    };

    search = query => {
        if (query.length > 0) {
            BooksAPI.search(query).then(res => {
                if (res.error) {
                    this.setState({ searchedBooks: [] });
                } else {
                    for (let x = 0; x < this.state.shelfBooks.length; x++) {
                        for (let y = 0; y < res.length; y++) {
                            // res[y].shelf =
                            //     this.state.shelfBooks[x].id === res[y].id
                            //         ? (res[y].shelf = this.state.shelfBooks[
                            //               x
                            //           ].shelf)
                            //         : "none";
                            if (this.state.shelfBooks[x].id === res[y].id) {
                                res[y].shelf = this.state.shelfBooks[x].shelf;
                            } 
                            //else {
                            //     res[y].shelf = "none";
                            // }
                        }
                    }
                    // console.log(this.state.searchedBooks);
                    this.setState({ searchedBooks: res });
                }
                // let e = res.map(e => e.id)
            });
        } else {
            this.setState({ searchedBooks: [] });
        }
    };

    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf).then(res => {
            book.shelf = shelf;
            this.getAllBooks();
        });
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
                            updateBook={this.updateBook}
                        />
                    )}
                />
                <Route
                    exact
                    path="/"
                    render={() => (
                        <MainPage
                            // currentlyReading={this.state.currentlyReading}
                            // wantToRead={this.state.wantToRead}
                            // read={this.state.read}
                            shelfBooks={this.state.shelfBooks}
                            updateBook={this.updateBook}
                        />
                    )}
                />
            </div>
        );
    }
}

export default BooksApp;

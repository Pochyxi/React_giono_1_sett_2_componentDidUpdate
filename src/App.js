import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookList from "./components/BookList";
import fantasyBooks from "./fantasyBooks.json";
import { Component } from "react";
import CommentArea from "./components/CommentArea";

class App extends Component {
  state = {
    selected: false,
    asinBook: null,
  };
  setSelected = (e) => {
    this.setState({
      selected: e,
    });
  };
  setAsinBook = (e) => {
    this.setState({
      asinBook: e,
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header d-flex">
          <BookList
            selected={this.state.selected}
            setSelected={this.setSelected}
            asinBook={this.state.asinBook}
            setAsinBook={this.setAsinBook}
            books={fantasyBooks}
          />
          <CommentArea
            selected={this.state.selected}
            asinBook={this.state.asinBook}
          />
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInput: "",
      authorInput: ""
    };
  }

  handleTitleInput = e => {
    const { value } = e.target;
    this.setState({ titleInput: value });
  };

  handleAuthorInput = e => {
    const { value } = e.target;
    this.setState({ authorInput: value });
  };

  handleSubmitBook = () => {
    const { titleInput: title, authorInput: author } = this.state;
    this.props.addBook({ title, author });
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.titleInput}
            onChange={this.handleTitleInput}
            placeholder="Title"
          />
        </div>

        <div>
          <input
            type="text"
            value={this.state.authorInput}
            onChange={this.handleAuthorInput}
            placeholder="Author"
          />
        </div>

        <div>
          <button onClick={this.handleSubmitBook}>Submit book</button>
        </div>
      </div>
    );
  }
}

export default AddBook;

import React from "react";

class InputForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: +new Date(),
      title: "",
      body: "",
      createdAt: new Date().toISOString(),
      archived: false,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const { value } = event.target;
    if (value.length < 50) {
      this.setState(() => {
        return {
          title: event.target.value,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2>Create Notes</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          {this.state.title.length < 50 ? (
            <p className="note-input__title__char-limit">Remaining characters: {50 - this.state.title.length} </p>
          ) : (
            <p className="note-input__title__char-limit">Remaining characters: {50 - this.state.title.length} </p>
          )}
          <input className="note-input__title" value={this.state.title} onChange={this.onTitleChangeEventHandler} type="text" placeholder="Write your title ..." required />
          <textarea className="note-input__body" value={this.state.body} onChange={this.onBodyChangeEventHandler} type="text" placeholder="Write your notes here ..." required></textarea>
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default InputForm;

import React from 'react';

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const file = e.target.files[0];

    if (file) {
      const res = new FileReader();
      res.onload = event => {
        this.setState({ text: event.target.result });
      };
      res.readAsText(file);
    } else {
      alert('Error reading file');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getText(this.state.text);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='file' onChange={this.handleChange} accept='.txt' />
        <br />
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

export default InputForm;

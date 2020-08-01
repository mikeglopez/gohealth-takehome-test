import React from 'react';

import './styles/App.css';
import InputForm from './components/InputForm';
import Histogram from './components/Histogram';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };

    this.getText = this.getText.bind(this);
  }

  getText(contents) {
    this.setState({ text: contents });
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <p>Choose a text file to parse:</p>
        </header>
        <div>
          <InputForm getText={this.getText} />
          <Histogram text={this.state.text} />
        </div>
      </div>
    );
  }
}

export default App;

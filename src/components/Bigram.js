import React from 'react';

const Bigram = props => {
  return <li>{`${props.bigram}: ${props.count}`}</li>;
};

export default Bigram;

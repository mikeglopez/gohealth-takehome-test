import React from 'react';
import Bigram from './Bigram';

const getHistogram = text => {
  if (text) {
    let string = text
      .toLowerCase()
      .replace(/[^\w\s]|_/g, '')
      .replace(/\s+/g, ' ');
    const words = string.slice(0, string.length - 1).split(' ');
    const bigrams = {};
    const order = [];

    for (let i = 0; i < words.length; i++) {
      if (words[i + 1] !== undefined) {
        if (bigrams[`${words[i]} ${words[i + 1]}`]) {
          bigrams[`${words[i]} ${words[i + 1]}`]++;
        } else {
          bigrams[`${words[i]} ${words[i + 1]}`] = 1;
        }

        if (!order.includes(`${words[i]} ${words[i + 1]}`)) {
          order.push(`${words[i]} ${words[i + 1]}`);
        }
      }
    }
    return order.map((bigram, i) => (
      <Bigram key={i} bigram={bigram} count={bigrams[bigram]} />
    ));
  }
};

const Histogram = props => {
  return <ul>{getHistogram(props.text)}</ul>;
};

export default Histogram;

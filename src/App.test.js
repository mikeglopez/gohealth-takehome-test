import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import App from './App';
import InputForm from './components/InputForm';
import Histogram from './components/Histogram';
import Bigram from './components/Bigram';

const getText = () => {
  console.log('getText Stub');
};

describe('Client', () => {
  describe('App', () => {
    const wrapper = shallow(<App />);

    it('should render without crashing', () => {
      wrapper;
    });
  });

  describe('Input Form', () => {
    const wrapper = shallow(<InputForm getText={getText} />);

    it('should render without crashing', () => {
      wrapper;
    });

    it('should contain a form', () => {
      expect(wrapper.find('form').length).toBe(1);
    });

    it('should hold a string value in state', () => {
      expect(typeof wrapper.state().text).toBe('string');
    });
  });

  describe('Histogram', () => {
    const wrapper = shallow(
      <Histogram text={'The quick brown fox and the quick blue hare.'} />
    );

    it('should render without crashing', () => {
      wrapper;
    });

    it('should contain an unordered list', () => {
      expect(wrapper.find('ul').length).toBe(1);
    });

    it('should display all bigrams', () => {
      expect(wrapper.find('ul').children()).toHaveLength(7);
    });
  });

  describe('Bigram', () => {
    const wrapper = shallow(<Bigram key={1} bigram={'the quick'} count={2} />);

    it('should render without crashing', () => {
      wrapper;
    });

    it('should contain a list item', () => {
      expect(wrapper.find('li').length).toBe(1);
    });

    it('should consist of only two words', () => {
      const text = wrapper.find('li').children().text();
      expect(text.slice(0, text.indexOf(':') - 1).split(' ')).toHaveLength(2);
    });
  });
});

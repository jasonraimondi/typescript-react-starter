import { assert } from 'chai';
import { mount } from 'enzyme';
import * as React from 'react';
import configureStore from 'redux-mock-store';

import App from './Sample';

const mockStore = configureStore();
const INITIAL_STATE = {
   language: 'typescript',
   frequency: 'weekly',
};
const store = mockStore(INITIAL_STATE);

describe('<App />', () => {
   beforeEach(() => {
      store.clearActions();
   });

   it('renders Unknown Name when no name entered', () => {
      const app = mount(<App store={store} version={1.0}/>);
      expect(app.find('.your-name').text()).toEqual('Your Name: Unknown Name');
   });

   it('renders correct version', () => {
      const app = mount(<App store={store} version={1.1}/>);
      expect(app.find('.version').text()).toEqual('Version: 1.1');
   });

   it('renders the correct name after updating the input value', () => {
      const app = mount(<App store={store} version={1.1}/>);
      app.find('input').simulate('change', { target: { value: 'Jason Raimondi' } });
      expect(app.find('.your-name').text()).toEqual('Your Name: Jason Raimondi');
   });
});

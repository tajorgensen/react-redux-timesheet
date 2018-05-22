import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';

describe('App Component', () => {
  it('renders without exploding', () => {
    expect(shallow(<App />)).toHaveLength(1);
  });

  it ('renders with Hello component', () => {
    const component = mount(<App />);
    
    expect(component).toIncludeText('Howdy');
    expect(component).toIncludeText('Henry');
  })
});

import React from 'react';
import QuestionCreate from './index';
 
describe('<QuestionCreate/>', () => {
    it('renders properly', () => {
        const wrapper = shallow(<QuestionCreate/>);
        expect(wrapper.text()).toContain('Create Question');
      });
});

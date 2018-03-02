import React from 'react';
import QuestionsListItem from './index';

const listItemData = {
    "url": "/questions/8495", 
    "published_at": "2018-03-01T13:52:46.561194+00:00", 
    "question": "Favourite programming language?", 
    "choices": [
        {"url": "/questions/8495/choices/32098", "votes": 0, "choice": "Objective-C"}, 
        {"url": "/questions/8495/choices/32097", "votes": 0, "choice": "Python"}
    ]
};

describe('<QuestionsListItem/>', () => {
    it('renders properly', () => {
        const wrapper = shallow(<QuestionsListItem {...listItemData}/>);
        expect(wrapper.text()).toContain('Available choices:2');
      });
});

import React from 'react';
import QuestionsList from './index';
 
const DELAY_MS = 2000;

const response = [
    {
        "url": "/questions/8495", 
        "published_at": "2018-03-01T13:52:46.561194+00:00", 
        "question": "Favourite programming language?", 
        "choices": [
            {"url": "/questions/8495/choices/32098", "votes": 0, "choice": "Objective-C"}, 
            {"url": "/questions/8495/choices/32097", "votes": 0, "choice": "Python"}, 
            {"url": "/questions/8495/choices/32099", "votes": 0, "choice": "Ruby"}, 
            {"url": "/questions/8495/choices/32096", "votes": 0, "choice": "Swift"}
        ]
    }
];

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('<QuestionsList/>', () => {
    beforeAll(()=>{
        fetchMock.get(`*`, JSON.stringify(response));
    });

    it('renders properly', () => {
        const wrapper = shallow(<QuestionsList />);
        expect(wrapper.text()).toContain('Questions');
    });

    it('fetches correct data', async () => {
        const wrapper = mount(<QuestionsList />);
        expect(wrapper.state(`questions`).length).toEqual(0);

        await wrapper.instance().componentDidMount();
        await sleep(DELAY_MS);
        expect(wrapper.state(`questions`)).toEqual(response);
      });
});

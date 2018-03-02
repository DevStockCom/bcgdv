import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'fetch-mock';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';

const DELAY_MS = 2000;

Enzyme.configure({ adapter: new Adapter() });

const sleep = () => {
    return new Promise(resolve => setTimeout(resolve, DELAY_MS));
}

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;
global.sinon = sinon;
global.fetchMock = fetchMock;
global.sleep = sleep;

// Fail tests on any warning
console.error = message => {
   throw new Error(message);
};
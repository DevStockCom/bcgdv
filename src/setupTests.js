import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'fetch-mock';
import toJson from 'enzyme-to-json';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;
global.sinon = sinon;
global.fetchMock = fetchMock;

// Fail tests on any warning
console.error = message => {
   throw new Error(message);
};
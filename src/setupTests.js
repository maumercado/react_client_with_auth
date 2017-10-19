import raf from './tmpPolyfills';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';

// one can insert globals here.
global.configureMockStore = configureMockStore;
global.raf = raf;

configure({ adapter: new Adapter() });

// this is due to a bug in enzyme

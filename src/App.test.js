import {shallow} from 'enzyme'
import { findByTestArr } from '../test/test.utils'
import App from './App'

const setup=()=>{
    return shallow(<App/>);
}

test('renders without error', ()=>{
    const wrapper = setup();
    const appComponent = findByTestArr(wrapper, 'component-app');
    expect(appComponent).toHaveLength(1);
})
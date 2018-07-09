import { loginSuccess } from 'ducks/auth';
import {createStore} from 'redux';
import { load, loaded } from 'ducks/loading';
import { validateEmail, validatePassword, login, PASSWORD_MAX_LENGTH } from 'services/FormUtils';
import { Integration } from 'components';
import { store } from 'App';


// Snapshot for Integration React Component
describe('>>>H O M E --- Snapshot',()=>{
  it('+++capturing Snapshot of Home', () => {
    const renderedValue =  renderer.create(<Integration store={store} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });

});

// within the Integration components describe function

describe('Email input', () => {
  let wrapper;
  beforeEach ( () => {
    wrapper = shallow(<Integration store={store}/>);
  });


  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  // it('should respond to change event and change the state of the Integration Component', () => {
  //   wrapper.find('#emails').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});
  //   expect(wrapper.state('email')).toEqual('blah@gmail.com');
  // });


});

import { loginSuccess } from 'ducks/auth';
import {createStore} from 'redux';
import { load, loaded } from 'ducks/loading';
import { validateEmail, validatePassword, login, PASSWORD_MAX_LENGTH } from 'services/FormUtils';
import { Oauthpage } from 'components';
import { store } from 'App';


// Snapshot for Oauthpage React Component
describe('>>>Oauthpage --- Snapshot',()=>{
  it('+++capturing Snapshot of Home', () => {
    const renderedValue =  renderer.create(<Oauthpage store={store} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });

});

// within the Oauthpage components describe function

describe('Email input', () => {
  let wrapper;
  beforeEach ( () => {
    wrapper = shallow(<Oauthpage store={store}/>);
  });


  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  // it('should respond to change event and change the state of the Oauthpage Component', () => {
  //   wrapper.find('#emails').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});
  //   expect(wrapper.state('email')).toEqual('blah@gmail.com');
  // });


});

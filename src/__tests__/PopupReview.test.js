import { loginSuccess } from 'ducks/auth';
import {createStore} from 'redux';
import { load, loaded } from 'ducks/loading';
import { validateEmail, validatePassword, login, PASSWORD_MAX_LENGTH } from 'services/FormUtils';
import { PopupReview } from 'components';
import { store } from 'App';


// Snapshot for PopupReview React Component
describe('>>>PopupReview --- Snapshot',()=>{
  it('+++capturing Snapshot of Home', () => {
    const renderedValue =  renderer.create(<PopupReview store={store} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });

});

// within the PopupReview components describe function

describe('Email input', () => {
  let wrapper;
  beforeEach ( () => {
    wrapper = shallow(<PopupReview store={store}/>);
  });


  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  // it('should respond to change event and change the state of the PopupReview Component', () => {
  //   wrapper.find('#emails').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});
  //   expect(wrapper.state('email')).toEqual('blah@gmail.com');
  // });


});

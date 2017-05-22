import merge from 'lodash/merge';

import { RECEIVE_USER } from '../actions/user_actions';

const defaultUser = Object.freeze({
  id: null,
  username: "",
  image_url: null,
  pins: []
});

const UserReducer = (state = defaultUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, action.user);
    default:
      return state;
  }
};

export default UserReducer;

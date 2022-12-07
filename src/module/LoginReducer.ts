import {types} from './Action';

const defaultState = {
  user: {
    id: '',
    name: '',
  },
};

const LoginReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case types.LOGIN:
      return {...state, user: action.payload};
    case types.LOGOUT:
      return {...state, user: defaultState.user};
    default:
      return state;
  }
};

export default LoginReducer;

import {
  HTTP_REQUEST_REQUEST,
  HTTP_REQUEST_FAILURE
} from '../actions/http_request';

const initialState = {
  requestPending: false,
  error: false,
  userError: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HTTP_REQUEST_REQUEST:
      return Object.assign({}, state, {
        requestPending: true
      });
    case HTTP_REQUEST_FAILURE:
      return Object.assign({}, state, {
        requestPending: false,
        error: action.error
      });
    default:
      return state;
  }
};

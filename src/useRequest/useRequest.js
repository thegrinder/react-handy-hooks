import { useReducer } from 'react';

const useRequest = () => {
  const initialRequestState = {
    loading: false,
    initialLoad: true,
    succeeded: false,
    error: null,
    data: {},
  };

  const namespace = 'useRequest';
  const actionTypes = {
    LOADING: `${namespace}/LOADING`,
    SUCCEEDED: `${namespace}/SUCCEEDED`,
    FAILED: `${namespace}/FAILED`,
  };

  const actionCreators = {
    loading: () => ({ type: actionTypes.LOADING }),
    succeeded: (data = {}) => ({ data, type: actionTypes.SUCCEEDED }),
    failed: error => ({ error, type: actionTypes.FAILED }),
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.LOADING:
        return {
          ...state,
          error: null,
          loading: true,
          succeeded: false,
        };
      case actionTypes.SUCCEEDED:
        return {
          ...state,
          loading: false,
          succeeded: true,
          initialLoad: false,
          data: action.data,
        };
      case actionTypes.FAILED:
        return {
          ...state,
          loading: false,
          initialLoad: false,
          error: action.error,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialRequestState);

  const boundActionCreators = {
    loading: () => dispatch(actionCreators.loading()),
    succeeded: (data = {}) => dispatch(actionCreators.succeeded(data)),
    failed: error => dispatch(actionCreators.failed(error)),
  };

  return {
    state,
    actions: boundActionCreators,
  };
};

export default useRequest;

import { useReducer, useMemo } from 'react';

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
  FULFILLED: `${namespace}/FULFILLED`,
};

const actionCreators = {
  loading: () => ({ type: actionTypes.LOADING }),
  succeeded: (data = {}) => ({ data, type: actionTypes.SUCCEEDED }),
  failed: (error) => ({ error, type: actionTypes.FAILED }),
  fulfilled: () => ({ type: actionTypes.FULFILLED }),
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
    case actionTypes.FULFILLED:
      return {
        ...state,
        loading: false,
        initialLoad: false,
      };
    default:
      return state;
  }
};

const useRequest = () => {
  const [state, dispatch] = useReducer(reducer, initialRequestState);

  const boundActionCreators = useMemo(
    () => ({
      loading: () => dispatch(actionCreators.loading()),
      succeeded: (data = {}) => dispatch(actionCreators.succeeded(data)),
      failed: (error) => dispatch(actionCreators.failed(error)),
      fulfilled: () => dispatch(actionCreators.fulfilled()),
    }),
    []
  );

  const memoizedState = useMemo(() => state, [state]);

  return [memoizedState, boundActionCreators];
};

export default useRequest;

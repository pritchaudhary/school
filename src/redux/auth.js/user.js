import * as actions from '../actions/actionsTypes';



const initialState = {
  loaded: false,
  data: {},
  error: null
};

const { LOAD, LOAD_SUCCESS, LOAD_FAIL } = actions;

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.profile && globalState.profile.user && globalState.profile.user.loaded;
}

export function user() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: async ({ client }) => {
      try {
        const response = await client.get('Values');
        return response;
      } catch (error) {
        throw error;
      }
    }
  };
}

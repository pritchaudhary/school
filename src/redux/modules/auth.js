export const SET = 'auth/SET';
export const UNSET = 'auth/UNSET';


const initialState = {
  accessToken: null,
  user: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET:
      return {
        ...state,
        user: action.user,
        accessToken: action.token
      };
    case UNSET:
      return {
        ...state,
        user: null,
        accessToken: null
      };
    default:
      return state;
  }
}

export const set = (token, user) => ({
  type: SET,
  user,
  token
});

export const unSet = () => ({
  type: UNSET
});

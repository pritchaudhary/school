export const SET = "subDepartment/SET";
export const ADD = "subDepartment/ADD";
export const UPDATE = "subDepartment/UPDATE";
export const REMOVE = "subDepartment/REMOVE";

const initialState = {
  data: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET:
      return {
        ...state,
        data: action.data,
      };
    case ADD:
      return {
        ...state,
        data: [action.data, ...state.data],
      };
    case UPDATE:
      return {
        ...state,
        data: state.data.map((d) =>
          d.id === action.data.id ? { ...d, ...action.data } : { ...d }
        ),
      };
    case REMOVE:
      return {
        ...state,
        data: state.data.filter((d) => d.id !== action.id),
      };

    default:
      return state;
  }
}

export const set = (data) => ({
  type: SET,
  data,
});

export const add = (data) => ({
  type: ADD,
  data,
});

export const update = (id, data) => ({
  type: UPDATE,
  id,
  data,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

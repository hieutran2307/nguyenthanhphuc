import {
  GET_DANH_SACH_MON_HOC_LIST,
  GET_DANH_SACH_MON_HOC_LIST_ERROR,
  GET_DANH_SACH_MON_HOC_LIST_SUCCESS
} from "../../actions/tracnghiem/DanhSachMonHocActions";

const initialState = {
  isFetching: false,
  response: null,
  error: null
};
const getDanhSachMonHocReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_DANH_SACH_MON_HOC_LIST:
      return Object.assign({}, state, {
        isFetching: true,
        response: null,
        error: null
      });

    case   GET_DANH_SACH_MON_HOC_LIST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: null,
        response: action.response
      });

    case GET_DANH_SACH_MON_HOC_LIST_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        response: null,
        error: action.error
      });
    default:
      return state;
  }
};

export default getDanhSachMonHocReducers



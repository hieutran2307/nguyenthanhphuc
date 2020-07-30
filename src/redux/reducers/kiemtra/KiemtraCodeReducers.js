import {
    POST_KIEM_TRA_CODE,
    POST_KIEM_TRA_CODE_SUCCESS,
    POST_KIEM_TRA_CODE_ERROR,
  } from '../../actions/kiemtra/KiemtraCodeActions';
  
  import {arrayIsEmpty} from '../../../components/custom/function';
  const initialState = {
    state: -1,
    data: null,
    error: '',
    loading: false,
    statusCode: null,
  };
  const KiemtraCodeReducers = (state = initialState, action) => {
    switch (action.type) {
      case POST_KIEM_TRA_CODE:
        return Object.assign({}, state, {
          error: '',
          data:null,
          state: 0,
          loading: true,
        });
      case POST_KIEM_TRA_CODE_SUCCESS:
        return Object.assign({}, state, {
          error:'',
          state: 1,
          loading: false,
          data: action.response,
          statusCode:action.response.statusCode,
        });
      case POST_KIEM_TRA_CODE_ERROR:
        return Object.assign({}, state, {
          data:null,
          state: -1,
          error: action.error,
          loading: false,
        });
      default:
        return state;
    }
  };
  export default KiemtraCodeReducers;

  
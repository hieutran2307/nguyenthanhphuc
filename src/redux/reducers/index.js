import {combineReducers} from 'redux';
import LoginReducers from './login/LoginReducers';
import getDanhSachMonHocReducers from './tracnghiem/DanhSachMonHocreducers';
import getDanhSachChuDeReducers from './tracnghiem/DanhSachChuDeReducer';
const allReducers = combineReducers({
  LoginReducers,
  getDanhSachMonHocReducers,
  getDanhSachChuDeReducers
});

export default allReducers;

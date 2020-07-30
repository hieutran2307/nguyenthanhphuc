import {combineReducers} from 'redux';
import LoginReducers from './login/LoginReducers';
import getDanhSachMonHocReducers from './tracnghiem/DanhSachMonHocreducers';
import getDanhSachChuDeReducers from './tracnghiem/DanhSachChuDeReducer';
import KiemtraCodeReducers from './kiemtra/KiemtraCodeReducers';
const allReducers = combineReducers({
  LoginReducers,
  getDanhSachMonHocReducers,
  getDanhSachChuDeReducers,
  KiemtraCodeReducers
});

export default allReducers;

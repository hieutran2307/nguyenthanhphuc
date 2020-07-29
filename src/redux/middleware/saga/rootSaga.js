import { all } from 'redux-saga/effects';

import { watchLogin } from './login/LoginSagas';
import {watchGetDanhSachMonHocSaga} from './tracnghiem/DanhSachMonHocSaga';
import{watchGetDanhSachChuDeSaga} from './tracnghiem/DanhSachChuDeSaga';


export default function* rootSaga() {
    yield all([
        watchLogin(),
        watchGetDanhSachMonHocSaga(),
        watchGetDanhSachChuDeSaga()
    ]);
}
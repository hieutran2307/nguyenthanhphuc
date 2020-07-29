
import {
    GET_DANH_SACH_CHU_DE_LIST,
    GET_DANH_SACH_CHU_DE_LIST_ERROR,
    GET_DANH_SACH_CHU_DE_LIST_SUCCESS
  } from '../../../actions/tracnghiem/DanhSachChuDeAction';
  
  import { call, takeEvery, put } from 'redux-saga/effects';
  
  import {
    getDanhSachChuDeApi
  
  } from "../../api/tracnghiem/DanhSachChuDeApi";
  
  
  function* getDanhSachChuDeSaga(action) {
    try {
      const response = yield getDanhSachChuDeApi(action.input);
      if (response === undefined) {
        yield put({ type: GET_DANH_SACH_CHU_DE_LIST_ERROR, error });
      } else {
        yield put({ type: GET_DANH_SACH_CHU_DE_LIST_SUCCESS, response });
      }
    } catch (error) {
      const err = 'Không kết nối được với máy chủ'
      yield put({ type: GET_DANH_SACH_CHU_DE_LIST_ERROR, err });
    }
  }
  
  
  export function* watchGetDanhSachChuDeSaga() {
    yield takeEvery(GET_DANH_SACH_CHU_DE_LIST, getDanhSachChuDeSaga);
  }
  


import {
  GET_DANH_SACH_MON_HOC_LIST,
  GET_DANH_SACH_MON_HOC_LIST_ERROR,
  GET_DANH_SACH_MON_HOC_LIST_SUCCESS,
} from '../../../actions/tracnghiem/DanhSachMonHocActions';

import {call, takeEvery, put} from 'redux-saga/effects';

import {getDanhSachMonHocApi} from '../../api/tracnghiem/DanhSachMonHocApi';

function* getDanhSachMonHocSaga(action) {
  try {
    const response = yield getDanhSachMonHocApi(action.input);
    if (response === undefined) {
      yield put({type: GET_DANH_SACH_MON_HOC_LIST_ERROR, error});
    } else {
      yield put({type: GET_DANH_SACH_MON_HOC_LIST_SUCCESS, response});
    }
  } catch (error) {
    const err = 'Không kết nối được với máy chủ';
    yield put({type: GET_DANH_SACH_MON_HOC_LIST_ERROR, err});
  }
}

export function* watchGetDanhSachMonHocSaga() {
  yield takeEvery(GET_DANH_SACH_MON_HOC_LIST, getDanhSachMonHocSaga);
}

import {
    POST_KIEM_TRA_CODE,
    POST_KIEM_TRA_CODE_SUCCESS,
    POST_KIEM_TRA_CODE_ERROR,
} from '../../../actions/kiemtra/KiemtraCodeActions';

import {call, takeEvery, put} from 'redux-saga/effects';

import {postKiemtraCodeApi} from '../../api/kiemtra/KiemtraCodeApi';

function* kiemTraCodeFlow(action) {
  try {
    const response = yield postKiemtraCodeApi(action.input);
    if (response !== undefined) {
      if (response.statusCode === '200') {
        yield put({type: POST_KIEM_TRA_CODE_SUCCESS, response});
      } else {
        const error = response.message;
        yield put({type: POST_KIEM_TRA_CODE_ERROR, error});
      }
    } else {
      const errorStr = 'Lỗi không lấy được kết quả!';
      yield put({type: POST_KIEM_TRA_CODE_ERROR, error: errorStr});
    }
  } catch (error) {
    if (error === undefined) {
      const errorStr = 'Lỗi không lấy được kết quả!';
      yield put({type: POST_KIEM_TRA_CODE_ERROR, error: errorStr});
    } else {
      yield put({type: POST_KIEM_TRA_CODE_ERROR, error});
    }
  }
}

export function* watchKiemTraCode() {
  yield takeEvery(POST_KIEM_TRA_CODE, kiemTraCodeFlow);
}

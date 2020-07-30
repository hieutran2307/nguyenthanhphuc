export const POST_KIEM_TRA_CODE = "POST_KIEM_TRA_CODE";
export const POST_KIEM_TRA_CODE_SUCCESS = "POST_KIEM_TRA_CODE_SUCCESS";
export const POST_KIEM_TRA_CODE_ERROR = "POST_KIEM_TRA_CODE_ERROR";



export const CHANGE_STATE_KIEM_TRA_CODE_FORM = "CHANGE_STATE_KIEM_TRA_CODE_FORM";

export const postKiemTraCodeAction = input => {
  return {
    type: POST_KIEM_TRA_CODE,
    input: input
  };
};
export const logoutAction = (input) => {
  return {
      type: LOGOUT,
      input: input
  }
}
export const changeStateKiemTraCodeAction = (key, value) => {
  return {
    type: CHANGE_STATE_KIEM_TRA_CODE_FORM,
    key: key,
    value: value
  };
};


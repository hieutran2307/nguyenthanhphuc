export const GET_DANH_SACH_MON_HOC_LIST = "GET_DANH_SACH_MON_HOC_LIST";
export const GET_DANH_SACH_MON_HOC_LIST_SUCCESS = "GET_DANH_SACH_MON_HOC_LIST_SUCCESS";
export const GET_DANH_SACH_MON_HOC_LIST_ERROR = "GET_DANH_SACH_MON_HOC_LIST_ERROR";

export const getDanhSachMonHocAction = input => {
  return {
    type: GET_DANH_SACH_MON_HOC_LIST,
    input: input
  };
};


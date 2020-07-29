export const GET_DANH_SACH_CHU_DE_LIST = "GET_DANH_SACH_CHU_DE_LIST";
export const GET_DANH_SACH_CHU_DE_LIST_SUCCESS = "GET_DANH_SACH_CHU_DE_LIST_SUCCESS";
export const GET_DANH_SACH_CHU_DE_LIST_ERROR = "GET_DANH_SACH_CHU_DE_LIST_ERROR";

export const getDanhSachChuDeAction = input => {
  return {
    type: GET_DANH_SACH_CHU_DE_LIST,
    input: input
  };
};



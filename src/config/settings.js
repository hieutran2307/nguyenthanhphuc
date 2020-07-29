const API_URL = 'http://localhost/elearning';
const serverpic = 'http://localhost/elearning/img/hinhanh/';
const serverhinhanh = 'http://localhost/elearning/img/';
var API_PUBLIC = API_URL;

const errorServerFail = 'Không kết nối được với máy chủ';
const userProfile = {
  data: {
    idthanhvien: '',
    hovaten: '',
    ngaysinh: '',
    sodienthoai: '',
    email: '',
    masosinhvien: '',
    khoa: '',
    chuyenkhoa: '',
    nienkhoa: '',
    khoahoc: '',
    thuhang: '',
    giohoctap: '',
    tracnghiem: '',
    hinhanh: '',
  },
  user: '',
  pass: '',
  token: '',
  avatar: '',
  noiDungFileMaHoa: '',
};
const errorObject = (api) => {
  return {resultCode: -1, message: api + ' ' + errorServerFail};
};
import Config from 'react-native-config';
Config.userProfile = userProfile;

export {API_URL, serverpic,API_PUBLIC,serverhinhanh, userProfile, errorObject};

import {/* userProfile,*/ API_PUBLIC} from '../../../../config/settings';

const errorServerFail = 'Không kết nối được với máy chủ';

export function postKiemtraCodeApi(input) {
    console.log("ma codeaaaaaa", input)
  return fetch(`${API_PUBLIC}/kiemtra/kiemtracode.php`, {
    method: 'POST',
    body: JSON.stringify({
      macode: input.macode,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return {statusCode: -1, msg: errorServerFail};
    });
}

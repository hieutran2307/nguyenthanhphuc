import { userProfile, API_PUBLIC } from "../../../../config/settings";

export function getDanhSachMonHocApi(input) {

  return fetch(`${API_PUBLIC}/tracnghiem/danhsachmonhoc.php`, {
    method: "GET",
  })
    .then((response) => {
      return response.json()
    })
    .catch((error) => {
      console.log(error)
    });
}


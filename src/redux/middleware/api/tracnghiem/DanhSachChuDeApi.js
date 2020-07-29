import { userProfile, API_PUBLIC } from "../../../../config/settings";

export function getDanhSachChuDeApi(input) {
  
  var id = input.idmonhoc;
  return fetch(`${API_PUBLIC}/tracnghiem/danhsachchude.php?id=1`, {
    method: "GET",
  })
    .then((response) => {
        console.log("data danh sach chu de tra ve",response)
      return response.json()
    })
    .catch((error) => {
      console.log(error)
    });
}

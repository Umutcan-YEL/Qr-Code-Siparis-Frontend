const BASE_URL = "http://localhost:8085/";
// import headerUret from "../helpers/CreateHeader";
import axios from "axios";

const SiparisAl = async (siparis) => {
  return await axios
    .get(`${BASE_URL}SiparisListele`, siparis, /*{
      // headers: headerUret(),
    }*/
  )
    .then((response) => {
      console.log("servise- " , response)
      return response;
      
    })
    .catch((err) => {
      throw err
    })
}

export { SiparisAl }

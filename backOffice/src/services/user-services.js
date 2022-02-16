import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://localhost:44329/user/Authenticate";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "findall");
  }

  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
}
export default new UserService();

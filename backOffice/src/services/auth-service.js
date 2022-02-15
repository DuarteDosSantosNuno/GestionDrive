import axios from "axios";

const API_URL = "https://localhost:44329/user/Authenticate";

class AuthService {
  login(username, password) {
    return (
      axios
        //   .post(API_URL + "login", { username, password })
        .post(API_URL + "login", {
          username: "cedric@elong.fr",
          password: "MyPass-word03",
        })
        .then((response) => {
          if (response.data.accessToken) {
            //localStorage.setItem("user", JSON.stringify(response.data));
            console.log(
              localStorage.setItem("user", JSON.stringify(response.data))
            );
          }
          return response.data;
        })
    );
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(email, password) {
    return axios.post(API_URL + "register-client", {
      email,
      password,
    });
  }
}

export default new AuthService();

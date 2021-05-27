import axios from "axios";

const setAuthToken = (token, userId) => {
  console.log(token);
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Barer ${token}`;
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
  } else {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  }
};

export default setAuthToken;

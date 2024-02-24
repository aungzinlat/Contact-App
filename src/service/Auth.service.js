import { api } from "./Api";

export const Register = async (formData) => {
  try {
    const res = await api.post("/register", formData);
    console.log(res);
    if (res) {
      return res;
    } else {
      console.log(res.error);
    }
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export const Login = async (formData) => {
  try {
    const res = await api.post("/login", formData);
    if (res.data.token) {
      // console.log(res.data.token);
      localStorage.setItem("auth", JSON.stringify(res.data.token));
      console.log(res.data);
      return res.data;

      //   localStorage.setItem();
    } else {
      console.log(res.error);
    }
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

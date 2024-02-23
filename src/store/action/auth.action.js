import { Login, Register } from "../../service/Auth.service";

export const LoginAction = async (dispatch, formData) => {
  try {
    dispatch({ type: "process" });
    const res = await Login(formData);
    console.log(res.token);
    if (res.token) {
      dispatch({ type: "login", payload: res.token });
    } else {
      dispatch({ type: "error", payload: res.msg });
    }
  } catch (e) {
    dispatch({ type: "error", payload: res.msg });
  }
};

export const RegisterAction = async (dispatch, formData) => {
  try {
    dispatch({ type: "process" });
    const res = await Register(formData);
    if (res.success) {
      dispatch({ type: "register", payload: res });
    } else {
      dispatch({ type: "error", payload: res.msg });
    }
  } catch (e) {
    dispatch({ type: "error", payload: res.msg });
  }
};

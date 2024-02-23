import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonComponents,
  ErrorComponents,
  FormComponents,
  LoadingComponents,
} from "../components";
import { useSelector, useDispatch } from "react-redux";
import { LoginAction } from "../store/action/auth.action";
import { login, processing } from "../store/slice/auth.slice";
import PreventComponents from "../components/Prevent.components";
import { Login } from "../service/Auth.service";

const LoginPage = () => {
  const nav = useNavigate();
  const { data, loading, error, auth } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (data) {
      nav("/home");
    }
  }, [data]);

  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(processing());
    const res = await Login(formData);
    dispatch(login(res));
  };

  return (
    <PreventComponents check={localStorage.getItem("auth")} path={"/home"}>
      {loading ? (
        <LoadingComponents />
      ) : (
        <div className="center">
          <div className=" w-full max-w-lg shadow p-8 space-y-6 bg-gray-50">
            <div className="mb-10">
              <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Login To Your Account
              </h2>
            </div>
            {error && <ErrorComponents>{error}</ErrorComponents>}
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormComponents
                onChange={handleInputChange}
                value={formData.email}
                name="email"
                type="email"
                label={"Email"}
                placeholder={"example@gmail.com"}
              />
              <FormComponents
                onChange={handleInputChange}
                value={formData.password}
                name="password"
                type="password"
                label={"Password"}
                placeholder={"password"}
              />

              <ButtonComponents type="submit">Login</ButtonComponents>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Don't you have an account?{" "}
              <button
                onClick={() => nav("/register")}
                className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
              >
                Register
              </button>
            </p>
          </div>
        </div>
      )}
    </PreventComponents>
  );
};

export default LoginPage;

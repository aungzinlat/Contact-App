import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonComponents,
  ErrorComponents,
  FormComponents,
} from "../components";
import { useSelector, useDispatch } from "react-redux";
import PreventComponents from "../components/Prevent.components.jsx";
import { processing, register } from "../store/slice/auth.slice.js";
import { Register } from "../service/Auth.service.js";

const RegisterPage = () => {
  const nav = useNavigate();
  const { data, loading, auth, error } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (data?.success) {
      console.log(data.success);
      nav("/");
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(processing());
    const res = await Register(formData);
    dispatch(register(res.data));
  };

  return (
    <PreventComponents check={localStorage.getItem("auth")} path={"/home"}>
      <div className="center">
        <div className=" w-full max-w-lg shadow p-8 space-y-6 bg-gray-50">
          <div className="mb-10">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register Your Account
            </h2>
          </div>
          {error && <ErrorComponents>{error}</ErrorComponents>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormComponents
              onChange={handleInputChange}
              value={formData.name}
              name="name"
              type="text"
              label={"Username"}
            />
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
            <FormComponents
              onChange={handleInputChange}
              value={formData.password_confirmation}
              name="password_confirmation"
              type="password"
              label={"Confirm Password"}
              placeholder={"confirm password"}
            />
            <ButtonComponents type="submit">Register</ButtonComponents>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <button
              onClick={() => nav("/")}
              className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </PreventComponents>
  );
};

export default RegisterPage;

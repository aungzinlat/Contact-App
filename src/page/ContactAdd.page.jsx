import React, { useEffect, useState } from "react";
import { ButtonComponents, FormComponents } from "../components";
import { addNewContact, editContact } from "../service/contact.service";
import { useNavigate, useLocation } from "react-router-dom";
import {
  useCreateContactMutation,
  useEditContactMutation,
} from "../store/services/endpoints/contact.endpoint";

const ContactAddPage = () => {
  const [fun, { isError, isLoading, data }] = useCreateContactMutation();
  const [edit, editData] = useEditContactMutation();

  const nav = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (location.state?.data) {
      const { id, name, phone, email, address } = location.state.data;
      console.log(name);
      setFormData({ name, phone, email, address });
    }
  }, [location]);

  const handleFormDataChange = (e) =>
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res;

    if (location.state?.edit) {
      res = await edit(location.state.id, formData);
    } else {
      res = await fun(formData);
    }

    if (res) {
      nav("/home");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className=" max-w-2xl w-full h-auto shadow px-6 py-7 border">
        <h1 className="font-serif text-xl mb-10 text-center">
          Create Your Contact
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <FormComponents
            onChange={handleFormDataChange}
            value={formData.name}
            label={"Name"}
            type="text"
            name="name"
          />
          <FormComponents
            onChange={handleFormDataChange}
            minLength={11}
            value={formData.phone}
            label={"Phone"}
            type="text"
            name="phone"
          />
          <FormComponents
            onChange={handleFormDataChange}
            value={formData.email}
            label={"Email"}
            type="text"
            name="email"
          />
          <FormComponents
            onChange={handleFormDataChange}
            value={formData.address}
            label={"Address"}
            type="text"
            name="address"
          />
          <ButtonComponents type="submit">
            {location.state?.edit ? "Edit Contact" : "Create Contact"}
          </ButtonComponents>
        </form>
      </div>
    </div>
  );
};

export default ContactAddPage;

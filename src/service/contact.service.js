import { api } from "./Api";

export const getAllContact = async () => {
  try {
    const res = await api.get("/contact");
    if (res.data) {
      const contactData = res.data.contacts.data;
      return contactData;
    }
  } catch (error) {
    return { error: true, msg: error.message };
  }
};

export const addNewContact = async (formData) => {
  try {
    const res = await api.post("/contact", formData);
    console.log(res);
    if (res.data) {
      return res.data;
    }
  } catch (error) {
    return { error: true, msg: error.message };
  }
};

export const getSingleContact = async (id) => {
  try {
    const res = await api.get(`/contact/${id}`);
    console.log(res);
    if (res.data) {
      return res.data.contact;
    }
  } catch (error) {
    console.log(error.message);
    return { error: true, msg: error.message };
  }
};

export const editContact = async (id, formData) => {
  try {
    const res = await api.put(`/contact/${id}`, formData);
    console.log(res);
    if (res.data) {
      return true;
    }
  } catch (error) {
    return { error: true, msg: error.message };
  }
};

export const deleteContact = async (id) => {
  try {
    const res = await api.delete(`/contact/${id}`);
    if (res.data) {
      return true;
    }
  } catch (error) {
    return { error: true, msg: error.message };
  }
};

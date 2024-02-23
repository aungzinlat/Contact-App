import React, { useEffect, useState } from "react";
import { getSingleContact } from "../service/contact.service";
import { useParams } from "react-router-dom";
import { LoadingComponents } from "../components";

const ContactDetailPage = () => {
  const { id } = useParams();
  const [items, setItems] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    (async () => {
      const res = await getSingleContact(id);
      console.log(res);
      setItems({ loading: false, error: null, data: res });
    })();
  }, [id]);

  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      {items.loading ? (
        <LoadingComponents />
      ) : (
        <>
          {items.error ? (
            <h1>{items.error}</h1>
          ) : (
            <div className=" p-10 border rounded text-center text-gray-500 max-w-lg w-full min-h-96 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className=" w-48 h-48 rounded-full mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <div className=" mt-5 text-3xl">
                <a
                  href="#"
                  className="font-medium leading-none text-gray-900 hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  {items.data.name}
                </a>
                <p>{items.data.phone}</p>
                <p className="mt-2 text-sm text-gray-900">
                  {items.data.email}{" "}
                </p>
                <p className="mt-2 text-sm text-gray-900">
                  {items.data.address}{" "}
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ContactDetailPage;

import React, { useEffect, useState } from "react";

import { deleteContact, getAllContact } from "../service/contact.service";
import {
  ButtonComponents,
  ContactListComponents,
  LoadingComponents,
} from "../components";
import { useNavigate } from "react-router-dom";
import { useGetContactQuery } from "../store/services/endpoints/contact.endpoint";

const ContactPage = () => {
  const { isLoading, isError, isSuccess, data } = useGetContactQuery();

  const nav = useNavigate();
  const [deleteItems, setDeleteItems] = useState(false);

  const handleAdd = () => nav("/home/add");

  const handleDelete = async (id) => {
    const res = await deleteContact(id);
    setDeleteItems((pre) => !pre);
  };

  return (
    <div className="w-full h-screen">
      {isLoading ? (
        <LoadingComponents />
      ) : (
        <>
          {isError ? (
            <h1>{isError.message}</h1>
          ) : (
            <section className=" text-gray-600 w-full mt-5">
              <div className="flex flex-col justify-center w-full">
                <div className="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                  <header className="px-5 py-4 border-b flex items-center justify-between border-gray-100">
                    <h2 className="font-bold text-xl text-gray-800">
                      Contact Lists
                    </h2>
                    <ButtonComponents type={"button"} onClick={handleAdd}>
                      Add New Contact
                    </ButtonComponents>
                  </header>
                  <div className="p-3">
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse block md:table">
                        <thead className="block md:table-header-group">
                          <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                            <th className="bg-gray-50 p-2 text-gray-700 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                              Name
                            </th>
                            <th className="bg-gray-50 p-2 text-gray-700 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                              Phone
                            </th>
                            <th className="bg-gray-50 p-2 text-gray-700 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                              Email
                            </th>
                            <th className="bg-gray-50 p-2 text-gray-700 font-bold md:border md:border-grey-500 text-left block md:table-cell">
                              Address
                            </th>
                            <th className="bg-gray-50 p-2 text-gray-700 font-bold md:border md:border-grey-500 text-left block md:table-cell"></th>
                          </tr>
                        </thead>
                        <tbody className="block md:table-row-group">
                          {data.contacts.data.map((item) => (
                            <ContactListComponents
                              handleDelete={handleDelete}
                              key={item.id}
                              data={item}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
};

export default ContactPage;

// import React from "react";

// const ContactPage = () => {
//   return <div>ContactPage</div>;
// };

// export default ContactPage;

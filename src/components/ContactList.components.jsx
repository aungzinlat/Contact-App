import React from "react";
import { useNavigate } from "react-router-dom";
import { CiTrash, CiEdit } from "react-icons/ci";

const ContactListComponents = ({ data, handleDelete }) => {
  const nav = useNavigate();
  const handleRedirect = () => {
    nav(`/home/contact/${data.id}`);
  };

  const handleEdit = () => {
    nav(`/home/add`, { state: { edit: true, data, id: data.id } });
  };

  return (
    <tr className="bg-white cursor-pointer border border-grey-500 md:border-none block md:table-row">
      <td
        onClick={handleRedirect}
        className="p-2 md:border md:border-grey-500 text-left block md:table-cell"
      >
        <span className="inline-block w-1/3 md:hidden font-bold">Name</span>
        {data.name}
      </td>
      <td
        onClick={handleRedirect}
        className="p-2 md:border md:border-grey-500 text-left block md:table-cell"
      >
        <span className="inline-block w-1/3 md:hidden font-bold">Phone</span>
        {data.phone}
      </td>
      <td
        onClick={handleRedirect}
        className="p-2 md:border md:border-grey-500 text-left block md:table-cell"
      >
        <span className="inline-block w-1/3 md:hidden font-bold">Email</span>
        {data.email}
      </td>
      <td
        onClick={handleRedirect}
        className="p-2 md:border md:border-grey-500 text-left block md:table-cell"
      >
        <span className="inline-block w-1/3 md:hidden font-bold">Address</span>
        {data.address}
      </td>
      <td className="p-2 space-x-2 md:border md:border-grey-500 text-center">
        <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
        <button
          onClick={handleEdit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 border border-blue-500 rounded"
        >
          <CiEdit />
        </button>
        <button
          onClick={handleDelete.bind(this, data.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 border border-red-500 rounded"
        >
          <CiTrash />
        </button>
      </td>
    </tr>
  );
};

export default ContactListComponents;

import React from "react";

const FormComponents = ({ name, type, label, placeholder = "", ...rest }) => {
  return (
    <div className=" flex flex-col space-y-2">
      <label htmlFor={name} className="font-medium text-gray-900">
        {label}
      </label>
      <input
        {...rest}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
      />
    </div>
  );
};

export default FormComponents;

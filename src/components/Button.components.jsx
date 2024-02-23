import React from "react";

const ButtonComponents = ({ type, children, ...rest }) => {
  return (
    <div>
      <button
        type={type}
        {...rest}
        className="w-full text-center py-3 px-3 relative rounded group font-medium text-white inline-block"
      >
        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-blue-600 to-blue-500" />
        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-blue-600 to-blue-500" />
        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-blue-600 to-blue-500" />
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-blue-600 from-blue-500" />
        <span className="relative"> {children}</span>
      </button>

      {/* <button
        type={type}
        className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus:bg-blue-600 focus:ring-2"
        {...rest}
      >
        {children}
      </button> */}
    </div>
  );
};

export default ButtonComponents;

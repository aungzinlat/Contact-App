import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const PreventComponents = ({ check, path, children }) => {
  const nav = useNavigate();

  useEffect(() => {
    if (check) {
      nav(path);
    }
  }, [check]);

  return <div>{children}</div>;
};

export default PreventComponents;

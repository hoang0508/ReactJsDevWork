import React from "react";
import { useAuth } from "./Contexts/auth-context";

const ThemeContext = () => {
  const { theme } = useAuth();
  return (
    <>
      <div className={`mt-10 ${theme ? "dark" : "light"}`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam cum
        aliquam esse repudiandae quisquam alias necessitatibus pariatur fugit
        assumenda, nemo corporis illo accusamus unde animi. Excepturi
        consectetur provident fugit vel.
      </div>
    </>
  );
};

export default ThemeContext;

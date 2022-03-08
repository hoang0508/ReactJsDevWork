import { Fragment, useState } from "react";
import "./App.scss";
import { AuthProvider } from "./components/Contexts/auth-context";
import HeaderMain from "./components/HeaderMain";
import ThemeContext from "./components/ThemeContext";

function App() {
  return (
    <>
      <AuthProvider>
        <HeaderMain />
        <ThemeContext />
      </AuthProvider>
    </>
  );
}

export default App;

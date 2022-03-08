import { Fragment, useState } from "react";
import "./App.scss";
import { AuthProvider } from "./components/Contexts/auth-context";
import HeaderMain from "./components/HeaderMain";

function App() {
  return (
    <>
      <AuthProvider>
        <HeaderMain />
      </AuthProvider>
    </>
  );
}

export default App;

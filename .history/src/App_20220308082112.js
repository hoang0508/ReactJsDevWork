import { Fragment, useState } from "react";
import "./App.scss";
import { AuthProvider } from "./components/Contexts/auth-context";
import CookList from "./components/CookList";
import HeaderMain from "./components/HeaderMain";

function App() {
  return (
    <>
      <AuthProvider>
        <HeaderMain />
        <CookList />
      </AuthProvider>
    </>
  );
}

export default App;

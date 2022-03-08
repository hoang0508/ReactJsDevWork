import { Fragment, useState } from "react";
import "./App.scss";
import CartItem from "./components/CartItem";
import { AuthProvider } from "./components/Contexts/auth-context";
import CookList from "./components/CookList";
import HeaderMain from "./components/HeaderMain";

function App() {
  return (
    <>
      <AuthProvider>
        <HeaderMain />
        <CookList />
        <CartItem />
      </AuthProvider>
    </>
  );
}

export default App;

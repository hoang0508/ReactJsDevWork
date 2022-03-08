import { Fragment, useState } from "react";
import "./App.scss";
import CartItem from "./components/CartItem";
import { AuthProvider } from "./components/Contexts/auth-context";
import CookList from "./components/CookList";
import HeaderMain from "./components/HeaderMain";
import SearchContext from "./components/SearchContext";

function App() {
  return (
    <>
      <AuthProvider>
        <HeaderMain />
        <SearchContext />
        <CookList />
        <CartItem />
      </AuthProvider>
    </>
  );
}

export default App;

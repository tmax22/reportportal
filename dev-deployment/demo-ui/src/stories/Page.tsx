import React from "react";
import Logo from "../assets/react.svg?react";
import { Header } from "./Header";
import "./page.css";

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();
  return (
    <div>
      asd
      <svg width="100" height="100" />
      <Logo />
    </div>
  );
};

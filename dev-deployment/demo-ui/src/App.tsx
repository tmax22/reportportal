import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import classes from "./loginPage.scss";
import "./another.scss";
// import * as stylesAll from "./loginPage.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

console.log("styles", classes);
// console.log("stylesAll", stylesAll);
console.log("cx", cx);
function App() {
  console.log(`cx('login-page')`, cx("login-page"));

  const [count, setCount] = useState(0);

  return (
    <>
      <div className={cx("my-style")}>my aspp</div>
      <div className={"asd"}>another</div>
    </>
  );
}

export default App;

// Toggle.js
import React from "react";
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
// import { ReactComponent as MoonIcon } from '../assets/images/moon.png';
// import { ReactComponent as SunIcon } from '../assets/images/sun.png';
import { Button, Switch, theme } from "antd";
import { useAuth } from "../hooks/useAuth";

const { useToken } = theme;

const Toggle = () => {
  const { darkMode, toggleDark, changeThemeColor } = useAuth();
  const { token } = useToken();

  return (
    // <button onClick={toggleTheme} >
    //   {/* <SunIcon />
    //   <MoonIcon /> */}
    // </button>
    <>
      <Switch
        checked={darkMode}
        checkedChildren="Dark Mode"
        unCheckedChildren="Light Mode"
        onChange={() => toggleDark()}
      />
      <Button type="primary" style={{ backgroundColor: token.colorPrimary }}>
        Current theme
      </Button>
      <Button
        type="primary"
        style={{ backgroundColor: "#1677FF" }}
        onClick={() => changeThemeColor("#1677FF")}
      >
        Theme 1
      </Button>
      <Button
        type="primary"
        style={{ backgroundColor: "#5A54F9" }}
        onClick={() => changeThemeColor("#5A54F9")}
      >
        Theme 2
      </Button>
      <Button
        type="primary"
        style={{ backgroundColor: "#9E339F" }}
        onClick={() => changeThemeColor("#9E339F")}
      >
        Theme 3
      </Button>
      <Button
        type="primary"
        style={{ backgroundColor: "#ED4192" }}
        onClick={() => changeThemeColor("#ED4192")}
      >
        Theme 4
      </Button>
      <Button
        type="primary"
        style={{ backgroundColor: "#E0282E" }}
        onClick={() => changeThemeColor("#E0282E")}
      >
        Theme 5
      </Button>
      <Button
        type="primary"
        style={{ backgroundColor: "#F4801A" }}
        onClick={() => changeThemeColor("#F4801A")}
      >
        Theme 6
      </Button>
      <Button
        type="primary"
        style={{ backgroundColor: "#F2BD27" }}
        onClick={() => changeThemeColor("#F2BD27")}
      >
        Theme 7
      </Button>
      <Button
        type="primary"
        style={{ backgroundColor: "#00B96B" }}
        onClick={() => changeThemeColor("#00B96B")}
      >
        Theme 8
      </Button>
    </>
  );
};

export default Toggle;

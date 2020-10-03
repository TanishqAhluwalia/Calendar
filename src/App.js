import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "./scss/style.scss";
import TopBar from "./components/TopBar";

import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
// import green from "@material-ui/core/colors/green";
import { ThemeProvider } from "react-bootstrap";
import Card from "./components/Card";
import Cal2 from "./components/Cal2";
import { grey } from "@material-ui/core/colors";
import { Flex } from "@adobe/react-spectrum";
import Navbar from "./components/Navbar";
import Nav2 from "./components/Nav2";
// import Calender from "./components/Calender";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: grey[500],
    },
  },
});
function App() {
  const date = new Date();
  const [month, setMonth] = useState(Date.prototype.getMonth.bind(new Date()));
  const [year, setYear] = useState(Date.prototype.getFullYear.bind(new Date()));

  useEffect(() => {
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    console.log(month, year, date, "%%%%%%%%%%%%%%%%%%%%");
  }, []);

  const nextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else setMonth(month + 1);
  };

  const prevMonth = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
    } else setMonth(month - 1);
  };

  const toToday = () => {
    setMonth(Date.prototype.getMonth.bind(new Date()));
    setYear(Date.prototype.getFullYear.bind(new Date()));
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Flex direction="column" alignItems="center">
          {" "}
          <Navbar />
          <TopBar
            month={month + 1}
            year={year}
            nextMonth={nextMonth}
            prevMonth={prevMonth}
            toToday={toToday}
          />
          {/* <Calender /> */}
          <Cal2 month={month + 1} year={year} />
        </Flex>
      </div>
     
    </ThemeProvider>
  );
}

export default App;

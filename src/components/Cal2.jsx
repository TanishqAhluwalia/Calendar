import { Flex } from "@adobe/react-spectrum";
import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Card, { Card2 } from "./Card";
// import "../scss/cal.css";
// import "../scss/style.scss";
const Cal2 = ({ year = 2020, month = 9 }) => {
  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  var date = new Date(year, month - 1);
  const [today, setToday] = useState(new Date());
  const [col, setCol] = useState(true);
  const getCol = (col) => {
    return col ? "#1e1e1e" : "#19191b";
  };

  useEffect(() => {
    setToday(new Date());
  }, []);
  var list = [];
  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  const days = daysInMonth(month, year);
  var i = 1,
    j = 1;
  var day = date.getDay();
  switch (day) {
    case 1:
      day = 0;
      break;
    case 2:
      day = 1;
      break;
    case 3:
      day = 2;
      break;
    case 4:
      day = 3;
      break;
    case 5:
      day = 4;
      break;
    case 6:
      day = 5;
      break;
    case 0:
      day = 6;
      break;
    default:
      break;
  }
  var lastMonth = daysInMonth(month - 1, year);
  for (var k = day; k >= 1; --k) {
    list[k - 1] = lastMonth--;
    i++;
  }
  for (; i <= 42; ++i, j++) {
    if (i === days + day + 1) {
      j = 1;
    }

    // console.log("list", list, "days", days);
    list[i - 1] = j;
  }

  console.log(list, "days");
  return (
    <div className="cal2">
      <Grid container>
        <Flex>
          {dayNames.map((day) => (
            <Card2 child={day}></Card2>
          ))}
        </Flex>
        <React.Fragment>
          <Grid container>
            {list.slice(0, 7).map((item, i) => {
              if (item === 1) {
                console.log("day", date.getDay());
                return (
                  <Card
                    year={year}
                    date={("0" + item.toString()).slice(-2)}
                    month={month}
                    today={true}
                    bg={getCol(i % 2 === 0)}
                    dull="white"
                  />
                );
              } else if (item > 20) {
                return (
                  <Card
                    year={year}
                    month={month}
                    bg={getCol(i % 2 === 0)}
                    date={("0" + item.toString()).slice(-2)}
                    dull="grey"
                  ></Card>
                );
              } else {
                return (
                  <Card
                    year={year}
                    month={month}
                    bg={getCol(i % 2 === 0)}
                    date={("0" + item.toString()).slice(-2)}
                    dull="white"
                  ></Card>
                );
              }
            })}
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid container>
            {list.slice(7, 14).map((item, i) => {
              return (
                <Card
                  year={year}
                  month={month}
                  bg={getCol(i % 2 === 1)}
                  date={("0" + item.toString()).slice(-2)}
                ></Card>
              );
            })}
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid container>
            {list.slice(14, 21).map((item, i) => {
              return (
                <Card
                  year={year}
                  month={month}
                  bg={getCol(i % 2 === 0)}
                  date={("0" + item.toString()).slice(-2)}
                ></Card>
              );
            })}
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid container>
            {list.slice(21, 28).map((item, i) => {
              return (
                <Card
                  year={year}
                  month={month}
                  bg={getCol(i % 2 === 1)}
                  date={("0" + item.toString()).slice(-2)}
                ></Card>
              );
            })}
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid container>
            {list.slice(28, 35).map((item, i) => {
              if ((item >= 1) & (item <= 14)) {
                return (
                  <Card
                    year={year}
                    bg={getCol(i % 2 === 0)}
                    date={("0" + item.toString()).slice(-2)}
                    month={month}
                    dull="grey"
                  />
                );
              } else {
                return (
                  <Card
                    year={year}
                    month={month}
                    bg={getCol(i % 2 === 0)}
                    date={("0" + item.toString()).slice(-2)}
                    dull="white"
                  ></Card>
                );
              }
            })}
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid container>
            {list.slice(35, 42).map((item, i) => {
              if ((item >= 1) & (item <= 14)) {
                return (
                  <Card
                    year={year}
                    bg={getCol(i % 2 === 1)}
                    date={("0" + item.toString()).slice(-2)}
                    month={month}
                    dull="grey"
                  />
                );
              } else {
                return (
                  <Card
                    year={year}
                    month={month}
                    bg={getCol(i % 2 === 1)}
                    date={("0" + item.toString()).slice(-2)}
                  ></Card>
                );
              }
            })}
          </Grid>
        </React.Fragment>
      </Grid>
    </div>
  );
};

export default Cal2;

import { Button, Tooltip, Typography } from "@material-ui/core";
import React from "react";
import { Flex } from "@adobe/react-spectrum";
import todayIcon from "../icons/today.svg";
import nextIcon from "../icons/next.svg";
import prevIcon from "../icons/prev.svg";
import { OverlayTrigger } from "react-bootstrap";

const TopBar = ({ month, year = 2020, nextMonth, prevMonth, toToday }) => {
  const monthName = (m) => {
    switch (m) {
      case 1:
        return "January";
      case 2:
        return "February";

      case 3:
        return "March";

      case 4:
        return "April";

      case 5:
        return "May";

      case 6:
        return "June";

      case 7:
        return "July";

      case 8:
        return "August";

      case 9:
        return "September";

      case 10:
        return "October";

      case 11:
        return "November";

      case 12:
        return "December";

      default:
        return "00";
    }
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );
  return (
    <div className="top-bar" id="one">
      <div className="top-buttons">
        <Flex
          justifyContent="space-between"
          alignContent="center"
          alignitems="center"
          justifySelf="center"
        >
          <Button variant="contained" className="button">
            <p onClick={toToday}>
              <Flex
                gap="1px"
                justifyContent="space-between"
                alignContent="center"
                alignitems="center"
                justifySelf="center"
              >
                {" "}
                <img src={todayIcon} alt="" id="calicon"></img>{" "}
                <span id="today-btn">Today</span>
              </Flex>
            </p>
          </Button>
          <div className="button2">
            <p variant="p" component="p">
              <Flex
                justifyContent="space-between"
                alignContent="center"
                alignitems="center"
                justifySelf="center"
              >
                {" "}
                <img
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Previous Month"
                  src={nextIcon}
                  alt=""
                  onClick={prevMonth}
                />
                {`${monthName(month)} ${year}`}
                <img
                  data-toggle="tooltip"
                  data-placement="left"
                  title="Next Month"
                  src={nextIcon}
                  alt=""
                  onClick={prevMonth}
                  src={prevIcon}
                  alt=""
                  onClick={nextMonth}
                />
              </Flex>
            </p>
          </div>
        </Flex>{" "}
      </div>
    </div>
  );
};

export default TopBar;

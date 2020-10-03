import React from "react";
import { Flex } from "@adobe/react-spectrum";

import dashboard from "../icons/dashboard.svg";
import calender from "../icons/calender.svg";
import people from "../icons/people.svg";
import mail from "../icons/mail.svg";
import reports from "../icons/reports.svg";
import settings from "../icons/settings.svg";
import add from "../icons/add.svg";
import search from "../icons/search.svg";
import theme from "../icons/theme.svg";
const Navbar = () => {
  return (
    <div className="nav">
      <Flex
        width="98%"
        height="2rem"
        alignContent="center"
        justifySelf="center"
        margin="auto"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex
          UNSAFE_className="icon-bar"
          gap="2.5rem"
          alignContent="center"
          justifySelf="center"
          justifyContent="cenetr"
          alignItems="center"
          alignSelf="center"
        >
          <div
            className="rounded-circle"
            style={{
              background: "black",
              width: "2rem",
              height: "2rem",
              marginRight: "-1.2rem",
            }}
          ></div>
          <p>Sydney Clinic</p>
          <img src={dashboard} alt="" />
          <div
            className="active"
            style={{
              background: "#121212",
              overflow: "hidden",
              marginLeft: "-1rem",
              marginRight: "-1rem",
              height: "120%",
            }}
          >
            <Flex direction="column" justifyContent="space-between">
              <img
                src={calender}
                alt=""
                style={{
                  marginLeft: "1rem",
                  marginRight: "1rem",
                  paddingTop: "1rem",
                  paddingBottom: "0.7rem",
                  position: "relative",
                  top: "60%",
                  left: "50%",
                  transform: "translate(-100%,20%)",
                }}
              />

              <hr
                style={{
                  paddingBottom: "0",
                  width: "100%",
                  marginBottom: ".1rem",
                  color: "white",
                  border: "1px solid white",
                  marginTop: "1rem",
                }}
              ></hr>
            </Flex>
          </div>
          <img src={people} alt="" />
          <img src={mail} alt="" />
          <img src={reports} alt="" />
          <img src={settings} alt="" />
          <img
            src={add}
            style={{
              borderLeft: ".1px solid #e6e6e6",
              paddingLeft: "1rem",
              marginLeft: "-1rem",
              width: "3rem",
            }}
            alt=""
          />
          <img src={search} alt="" />
        </Flex>
        <img src={theme} alt="" />
      </Flex>
    </div>
  );
};

export default Navbar;

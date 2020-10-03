import React from "react";

const Nav2 = ({ date, month, day }) => {
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
        return "";
    }
  };
  const dayName = (m) => {
    switch (m) {
      case 1:
        return "Mon";
      case 2:
        return "Tue";

      case 3:
        return "Wed";

      case 4:
        return "Thu";

      case 5:
        return "Fri";

      case 6:
        return "Sat";

      case 7:
        return "Sun";

      default:
        return "";
    }
  };
  return (
    <div className="side">
      <div>
        <h2>
          {date} {`${monthName(month)}`} <span>{`${dayName(day)}`}</span>{" "}
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        </h2>
        <p>No appointments</p>
      </div>
    </div>
  );
};

export default Nav2;

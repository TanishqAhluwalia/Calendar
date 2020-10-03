import React from "react";

const Card = ({
  dull = "!e4e4e4",
  bg,
  today = false,
  date = "01",
  month = 9,
  year,
}) => {
  var style = {
    background: bg,
    border: dull,
  };

  var td;
  var dateToday = new Date();

  td =
    dateToday.getDate() === parseInt(date, 10) &&
    month === dateToday.getMonth() + 1;
  console.log(
    dateToday.getDate(),
    parseInt(date, 10),
    dateToday.getDate() === parseInt(date, 10),
    month,
    dateToday.getMonth(),
    "dateeeeeeeeeee",
    td
  );
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
  console.log(
    Date.prototype.getDay.bind(new Date(year, month, parseInt(date)))(),
    "dayfdeijg"
  );
  return (
    <div className="card" style={style}>
      <div className="date">
        {" "}
        {td && dull !== "grey" ? <hr className="v1" /> : true}
        {/* <Typography color="success" className="txt" variant="h2" component="h2"> */}
        <p
          className="txt"
          style={{
            color: dull,
          }}
        >
          {td && dull !== "grey" ? <>&nbsp;&nbsp;</> : true}

          {date > 0 ? date : true}
          <span
            style={{
              color: dull,
            }}
          >
            {month === 12 && date === "01" && dull === "grey"
              ? `January ${year + 1}`
              : true}
            {date === "01" && dull === "grey" ? monthName(month + 1) : true}
            {date === "01" && dull !== "grey" ? monthName(month) : true}
          </span>
        </p>
        {/* </Typography> */}
        {/* <Typography className="month" variant="p" component="p"> */}
        <p
          className="month"
          style={{
            color: dull,
          }}
        ></p>
        {/* </Typography> */}
      </div>
    </div>
  );
};

export default Card;

export const Card2 = ({ child }) => <div className="card2">{child}</div>;

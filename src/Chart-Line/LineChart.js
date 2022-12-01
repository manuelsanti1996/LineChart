import moment from "moment";
import React, { useState } from "react";
import Chart from "react-apexcharts";

function Linechart() {
  const [dateFilter, setDatefilter] = useState({
    title: { text: "Months" },
    categories:moment.months()
  });

  const [product, setProduct] = useState([
    {
      name: "spese",
      data: [234, 45, 67, 987, 345, 456, 87, 321, 45, 569, 76, 890,234, 45, 67, 987, 345, 456, 87, 321, 45, 569, 76, 890],
    },
    {
      name: "guadagno",
      data: [562, 145, 267, 97, 45, 156, 87, 321, 845, 969, 706, 20],
    },
    {
      name: "ricavato",
      data: [1012, 345, 117, 697, 845, 56, 287, 1321, 1845, 469, 306, 120],
    },
  ]);



  const FilterHandlerYear = () => {
    setDatefilter({
      title: { text: "Years" },
      categories: moment().year()
    });
  };
  const FilterHandlerMonth = () => {
    setDatefilter({
      title: { text: "Months" },
      categories:moment.months()
    });
  };
  const FilterHandlerDay = () => {
    setDatefilter({
      title: { text: "Days" },
      categories:moment("2022-11-01", "YYYY-MM-DD").daysInMonth(),
    });
  };
  return (
    <React.Fragment>
      <div className="container-fluid mt-3 mb-3"style={{width:"100%"}}>
        <h2>Line Chart</h2>
        <Chart
          type="line"
          width={1490}
          height={550}
          series={product}
          options={{
            title: { text: "2021" },
            xaxis: dateFilter,
            yaxis: {
              title: { text: " K" },
            }}}
        ></Chart>
        <div style={{display:"flex",justifyContent:"center"}}>
        <button onClick={FilterHandlerYear}>Anni</button>
        <button onClick={FilterHandlerMonth}>Mesi</button>
        <button onClick={FilterHandlerDay}>Giorni</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Linechart;

import React,{useState} from 'react';
import Chart from 'react-apexcharts';

function Linechart()
{
    const[product, setProduct]= useState(
        [
            {
                name:"spese",
                data:[234,45,67,987,345,456,87,321,45,569,76,890]
            },
            {
              name:"guadagno",
              data:[562,145,267,97,45,156,87,321,845,969,706,20]
            },
            {
              name:"ricavato",
              data:[1012,345,117,697,845,56,287,1321,1845,469,306,120]
            }
        ]
    );

    const[option, setOption]= useState(
        {
            title:{ text:"2021"},
            xaxis:{
                title:{text:" Months"},
                categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            },
            yaxis:{
                title:{text:" K"}                 
            }

        }
    );

    return(<React.Fragment>
        <div className='container-fluid mt-3 mb-3'>
           <h2>Line Chart</h2>          
          <Chart type='line'
          width={1490}
          height={550}
          series={product}
          options={option }
          >
          </Chart>

        </div>
    </React.Fragment>);
}

export default Linechart;
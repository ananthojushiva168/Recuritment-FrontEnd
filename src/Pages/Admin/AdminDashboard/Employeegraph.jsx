import React from 'react'
import { ComposedChart, Bar, XAxis, YAxis, Tooltip,Area,Line, Legend, CartesianGrid } from 'recharts';

const Employeegraph = () => {
    const data = [
        {
          "name": "Jan",
          "Money":"8000",
          "Sales":"2013",
          
        },
        {
          "name": "Feb",
          "Money":"6000",
          "Sales":"3030",
          
          
        },
        {
          "name": "Mar",
          "Money":"6500",
          "Sales":"5200"
        },
        {
          "name": "Apr",
          "Money":"2000",
          "Sales":"800"
        },
        {
          "name": "May",
          "Money":"5000",
          "Sales":"1200"
        },
        {
          "name": "Jun",
          "Money":"8200",
          "Sales":"6300"
        },
        {
          "name": "Jul",
          "Money":"5000",
          "Sales":"5000"
        },
        {
            "name": "Aug",
            "Money":"2000",
            "Sales":"900"
          },
          {
            "name": "Sep",
            "Money":"8000",
            "Sales":"3200"
          },
          {
            "name": "Oct",
            "Money":"2500",
            "Sales":"3800"
          },
          {
            "name": "Nov",
            "Money":"5000",
          "Sales":"2013"
          },
          {
            "name": "Dec",
            "Money":"11000",
            "Sales":"2100"}
      ]
  return (
    <div>


                            
<ComposedChart width={721} height={444} data={data}>
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Bar dataKey="Money" barSize={20} fill="#0074A4" />
  <Line type="monotone" dataKey="Sales" stroke="#ff7300" />
</ComposedChart>

    </div>
  )
}

export default Employeegraph
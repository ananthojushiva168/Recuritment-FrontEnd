import React from 'react'
import {BarChart,  Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const Employergraph = () => {
 const data = [
    {
      "name": "Jan",
      "Money": 4000
     
    },
    {
      "name": "Feb",
      "Money": 3000
    },
    {
      "name": "Mar",
      "Money": 2000
    },
    {
      "name": "Apr",
      "Money": 2780
    },
    {
      "name": "May",
      "Money": 1890
    },
    {
      "name": "Jun",
      "Money": 2390
    },
    {
      "name": "Jul",
      "Money": 3490
    },
    {
      "name": "Aug",
      "Money": 3490
    },
    {
      "name": "Sep",
      "Money": 3420
    },
    {
      "name": "Oct",
      "Money": 2582
    },
    {
      "name": "Nov",
      "Money":1258
    },
    {
      "name":"Dec",
      "Money":2358
    }
  ]
  return (
    <div>

<BarChart width={721} height={444} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
 
  <Bar dataKey="Money" barSize={15} fill="#0074A4" />
</BarChart>
    </div>
  )
}

export default Employergraph
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
const Stat = () => {
  const stat = useLoaderData().data
  return (
    <div className='text-center'>
      <h1>Comparison of count among Topics</h1>
      <div className='md:w-1/2 m-auto'>
        <ResponsiveContainer aspect={2} className='m-auto'>

          <BarChart data={stat} width={400} height={400}>

            <XAxis dataKey='name'></XAxis>

            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Bar dataKey='total' fill='#8883d8'></Bar>


          </BarChart>
        </ResponsiveContainer>
      </div>


    </div>
  );
};

export default Stat;
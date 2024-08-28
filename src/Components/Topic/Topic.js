import React from 'react';
import { Link } from 'react-router-dom';
import './Topics.css'
const Topic = ({topic}) => {
  // console.log(topic);
  const {id,name,logo,total}=topic
  return (
    <div className='selection'>
      <h1 className='text-center text-xl mb-3 mt-3'>{name}</h1>
      <img className={`w-full   ${name.toLowerCase()}`} src={logo} alt="" />
      <div className="footer flex justify-between items-center ml-5 my-2 text-sm">
      <p>{total} Questions</p>
      <Link to={`/quiz/${id}`}>
      <button className=' p-1 px-2 rounded-2xl text-white'>
        Take this Quiz</button>
      </Link>
      </div>
      
    </div>
  );
};

export default Topic;
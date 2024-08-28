import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
const Quiz = () => {
  const quiz = useLoaderData()
  const { logo, name } = quiz.data
  let question_count=0
  const [correct,setCorrect]=useState([])
  const update_correct=(ans)=>{
    if(!correct.find(correct=>correct===ans))
    setCorrect([...correct,ans])
  }
  console.log(correct);
  return (
    <div className='lg:w-3/5 m-auto text-center'>
      <div className=''>
        <h1 className='text-xl mb-8 font-bold'>Quiz of {name}</h1>
        <h1 className='text-green-500 font-semibold mb-2'>Correct Ans: {correct.length}</h1>
        {quiz.data.questions.map(q => <Question q={q} key={q.id} no={question_count+=1} update_correct={update_correct}></Question>)}
      </div>

    </div>
  );
};

export default Quiz;
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ q, no,update_correct }) => {
  const { options, question, correctAnswer } = q

  const answer_handler = (op) => {
    if (op === correctAnswer) {
      toast.success('Correct !', {
        position: toast.POSITION.TOP_LEFT});
        update_correct(op)
    }
    else {
      toast.error('Wrong Answer ', {
        position: toast.POSITION.TOP_LEFT});
    }
  }
  const showCorrectAns=()=>{
    toast.info(correctAnswer,{
      position: toast.POSITION.TOP_LEFT
    })
  }
  let option_no = 0
  return (
    <div className='border-solid border-2 mb-4 relative shadow-lg rounded-md'>
         <ToastContainer />
      <div className='mx-8 font-semibold my-4 hover:cursor-help '>
        Quiz:{no} {question}
      <div className='absolute top-1 right-2' onClick={()=>showCorrectAns()}>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg></div>
       

      </div>
      <div className="options mx-4 grid md:grid-cols-2 grid-cols-1 gap-1 mb-4 ">
        {options.map(op =>
          <div key={option_no += 1} onClick={() => answer_handler(op)}
            className='border-solid border-2 h-24 rounded-md
         flex justify-center items-center text-sm
         hover:bg-indigo-200 hover:cursor-pointer'>
            {op}
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
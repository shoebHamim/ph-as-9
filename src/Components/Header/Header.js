import React from 'react';
import header_img from '../../images/94767-OK1W3B-473.jpg'

const Header = () => {
  return (
    <div className='header mx-10 grid md:grid-cols-3'>
      <div className="img p-4">
        <img className='' src={header_img} alt="" />
      </div>
      <div className="col-span-2 text-xl  md:text-xl flex  items-center justify-center text-center">
      <p >
         Select your Topic, Take a Quiz, Be a <br />
         Quiz Master!
      </p>
      </div>
    </div>
  );
};

export default Header;
import React from 'react';

const CurrentDate = (props) => {
  var today = new Date();
  var value = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  return (
    <div className='updated'>
      Last updated on {value}.
    </div>
  )
}

export default CurrentDate;

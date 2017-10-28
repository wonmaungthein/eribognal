import React from 'react';

const Question = props => {
  return (
    <div>
      < h3> Question Title </h3>
      <p>{props.question}</p>
    </div>
  )
};

export default Question;

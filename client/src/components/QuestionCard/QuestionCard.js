import React from 'react';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';

const Question = props => {
  const question = props.question
  return (
    <div>
      <FormLabel component="legend">{question.title}</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value= "-1"
      >
      {question.options.map((option) => (
        <div>
          <FormControl component="fieldset">
            <FormControlLabel control={<Radio />} label={option.text} />
          </FormControl>
        </div>
      ))}
      </RadioGroup>
    </div>
  )
};

export default Question;

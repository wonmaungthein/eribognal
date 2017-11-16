import React from 'react';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';

const Question = props => {
  const question = props.question;
  const componentName = `question-card-${props.questionId}`;

  return (
    <FormControl component={componentName}>
      <FormLabel component={componentName}>{question.title}</FormLabel>
      <RadioGroup
        aria-label="options"
        name={componentName}
        value={props.selectedAnswer}
        
      >
      {question.options.map((option) => (
          <FormControl component={componentName}>
            <FormControlLabel control={<Radio name={componentName} checked={option.value === props.selectedAnswer} onChange={props.onSelect} />} label={option.text} value={option.value} />
          </FormControl>
      ))}
      </RadioGroup>
    </FormControl>
  )
};

export default Question;

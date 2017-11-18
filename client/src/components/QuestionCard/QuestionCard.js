import React from 'react';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel } from 'material-ui/Form';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Themes from '../../Themes';

const Question = props => {
  const question = props.question;
  const componentName = `question-card-${props.questionId}`;
  const { classes } = props;

  return (
    <FormControl component={componentName}>
      <FormLabel component={componentName}>
        <Typography className={classes.radioTitle} type="title">
          {question.title}
        </Typography>
        </FormLabel>
      <RadioGroup
        aria-label="options"
        name={componentName}
        value={props.selectedAnswer}>
        {question.options.map((option) => (
          <FormControl component={componentName}>
            <FormControlLabel control={
              <Radio
                classes={{
                  default: classes.defaultRadio,
                  checked: classes.checked,
                }} name={componentName} checked={option.value === props.selectedAnswer
                } onChange={props.onSelect} />} label={option.text} value={option.value} />
          </FormControl>
        ))}
      </RadioGroup>
    </FormControl>
  )
};


Question.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(Themes)(Question);


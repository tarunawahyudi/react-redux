import React, { useState } from 'react';
import PropTypes from 'prop-types';

function GoalInput({ addGoal }) {
  const [text, setText] = useState('');

  const onTextChangeHandler = ({ target }) => setText(target.value);

  return (
    <div>
      <input type="text" onChange={onTextChangeHandler} />
      <button type="button" onClick={() => addGoal(text)}>Add Goal</button>
    </div>
  );
}

GoalInput.propTypes = {
  addGoal: PropTypes.func.isRequired,
};

export default GoalInput;

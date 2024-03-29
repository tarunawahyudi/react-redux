import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GoalInput from './GoalInput';
import GoalItem from './GoalItem';
import {
  addGoalActionCreator,
  deleteGoalActionCreator,
} from '../states/goals/action';

function GoalList() {
  const goals = useSelector((states) => states.goals);
  const dispatch = useDispatch();

  function onAddGoal(text) {
    const id = `goal-${+new Date()}`;
    dispatch(addGoalActionCreator({ id, text }));
  }

  function onDeleteGoal(id) {
    dispatch(deleteGoalActionCreator(id));
  }

  return (
    <div>
      <h3>My Goals</h3>
      <GoalInput addGoal={onAddGoal} />

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <GoalItem {...goal} deleteGoal={onDeleteGoal} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoalList;

import React, { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  
  const [courseGoals, setCourseGoals] = useState(
    [
      { id: 'cg1', text: 'Finish the Course' },
      { id: 'cg2', text: 'Learn all about the course Main Toopic' },
      { id: 'cg3', text: 'Help others studants in the course Q&amp;A' },
    ]
  );

  function addNewGoalHandler(newGoal) {
    setCourseGoals(courseGoals => courseGoals.concat(newGoal));
  }

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals}/>
    </div>
  );
};

export default App;

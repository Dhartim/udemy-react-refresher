import React, { useState } from 'react';
import './App.css'
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text : 'Finsish the course'}, 
    {id:'cg2', text:'Learn course Material'},
    {id: 'cg3', text: 'Help other students'}
  ]);

  const addNewGoalHandler = (newGoal) => {
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    });
  };

  return <div className="course-goal">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList goals={courseGoals}/>
  </div>;
};

export default App;

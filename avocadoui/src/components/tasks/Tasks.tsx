import { useEffect, useState } from 'react';
import '../../css/Tasks.css'
import Task from '../../objects/Task';
import FilterBar from './FilterBar';
import ListView from './ListView';
import TaskDetails from './TaskDetails';

function Tasks(
  {addItem, tasks, toggleCompleted, showBar}: 
  {addItem: (tableName: string, object: object) => void, tasks: Task[], toggleCompleted: (task: Task) => void, showBar: boolean}
) {
  const [focusedTask, setFocusedTask] = useState<Task>()

  const changeFocusedTask = (newTask: Task) => {
    setFocusedTask(newTask)
    console.log(newTask)
  }
  const closeDetailsDiv = () => {
    const div = document.getElementById("TaskDetails")!
    div.style.width = "100%"
    div.style.visibility = "visible"

  }

  return (
    <div className="Tasks" id = "Tasks">
        <ListView
          addItem = {addItem}
          tasks = {tasks}
          toggleCompleted = {toggleCompleted}
          changeFocusedTask = {(task: Task) => changeFocusedTask(task)}
          closeDetailsDiv = {closeDetailsDiv}
          showBar = {showBar}
        />
        <TaskDetails
          focusedTask = {focusedTask}
        />
    </div>
  );
}

export default Tasks;

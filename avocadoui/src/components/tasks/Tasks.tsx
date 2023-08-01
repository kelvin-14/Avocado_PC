import { useEffect, useState } from 'react';
import '../../css/Tasks.css'
import Task from '../../objects/Task';
import FilterBar from './FilterBar';
import ListView from './ListView';
import TaskDetails from './TaskDetails';

function Tasks(
  {addItem, tasks, toggleCompleted}: 
  {addItem: (tableName: string, object: object) => void, tasks: Task[], toggleCompleted: (task: Task) => void}
) {
  const [focusedTask, setFocusedTask] = useState<Task>()

  const changeFocusedTask = (newTask: Task) => {
    setFocusedTask(newTask)
  }

  return (
    <div className="Tasks">
        <FilterBar catgoryName = "some category"/>
        <ListView
          addItem = {addItem}
          tasks = {tasks}
          toggleCompleted = {toggleCompleted}
          changeFocusedTask = {(task: Task) => changeFocusedTask(task)}
        />
        <TaskDetails
          focusedTask = {focusedTask}
        />
    </div>
  );
}

export default Tasks;

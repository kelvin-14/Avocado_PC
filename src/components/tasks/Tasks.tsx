import '../../css/Tasks.css'
import { useEffect, useState } from 'react';
import Task from '../../objects/Task';
import FilterBar from './FilterBar';
import ListView from './ListView';
import TaskDetails from './TaskDetails';
import BigBoldTitle from '../shared/BigBoldTitle';

function Tasks(
  {addItem, tasks, toggleCompleted, showBar, title}: 
  {addItem: (tableName: string, object: object) => void, tasks: Task[], toggleCompleted: (task: Task) => void, showBar: boolean, title: string}
) {
  const [focusedTask, setFocusedTask] = useState<Task>()
  const [divOpened, setDivOpened] = useState(true)

  const changeFocusedTask = (newTask: Task) => {
    if(divOpened) {
      if(newTask === focusedTask) {
        closeDetailsDiv()
      } else {
        setFocusedTask(newTask)
        openDetailsDiv()
      }
    }
  }
  const closeDetailsDiv = () => {
    const div = document.getElementById("TaskDetails")!
    div.style.visibility = "hidden"
  }

  const openDetailsDiv = () => {
    const div = document.getElementById("TaskDetails")!
    div.style.width = "50%"
    div.style.visibility = "visible"
  }

  return (
    <div className="Tasks" id = "Tasks">
        <ListView
          addItem = {addItem}
          tasks = {tasks}
          toggleCompleted = {toggleCompleted}
          changeFocusedTask = {(task: Task) => changeFocusedTask(task)}
          showBar = {showBar}
          title = {title}
        />
        <TaskDetails
          focusedTask = {focusedTask}
        />
    </div>
  );
}

export default Tasks;

import '../../css/Tasks.css'
import { useEffect, useState } from 'react';
import Task from '../../objects/Task';
import ListView from './ListView';
import TaskDetails from './TaskDetails';

function Tasks(
  {addTask, deleteTask, tasks, toggleCompleted, showBar, title}: 
  {
    addTask: (task: Task) => void, 
    deleteTask: (taskId: number) => void,
    tasks: Task[], 
    toggleCompleted: (task: Task) => void, 
    showBar: boolean, title: string
  }
) {
  const [focusedTask, setFocusedTask] = useState<Task>()
  const [divOpened, setDivOpened] = useState(true)

  const changeFocusedTask = (newTask: Task) => {
    if(divOpened) {
      if(newTask === focusedTask) {
        closeDetailsDiv()
        setDivOpened(false)
      } else {
        setFocusedTask(newTask)
      }
    } else {
      setFocusedTask(newTask)
      openDetailsDiv()
      setDivOpened(true)
    }
  }
  const closeDetailsDiv = () => {
    const div = document.getElementById("TaskDetails")!
    div.style.visibility = "hidden"
    div.style.display = 'none'
  }

  const openDetailsDiv = () => {
    const div = document.getElementById("TaskDetails")!
    div.style.display = 'block';
    div.style.width = "60%"
    div.style.visibility = "visible"
  }

  return (
    <div className="Tasks" id = "Tasks">
        <ListView
          addTask = {addTask}
          tasks = {tasks}
          toggleCompleted = {toggleCompleted}
          changeFocusedTask = {(task: Task) => changeFocusedTask(task)}
          showBar = {showBar}
          title = {title}
        />
        <TaskDetails
          addTask = {addTask}
          deleteTask={() => {deleteTask(focusedTask?.id!); closeDetailsDiv();}}
          focusedTask = {focusedTask}
        />
    </div>
  );
}

export default Tasks;

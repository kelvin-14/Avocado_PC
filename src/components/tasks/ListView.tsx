import '../../css/ListView.css'
import { useEffect, useState } from 'react'
import Task from '../../objects/Task'
import List from './List'
import EmptyPage from './EmptyPage'
import CalendarButton from './CalendarButton'
import TimePickerButton from './TimePickerButton'
import BigBoldTitle from '../shared/BigBoldTitle'

function ListView(
  {addTask, tasks, toggleCompleted, changeFocusedTask,showBar, title}:
  {
    addTask: (tableName: string, object: object) => void, 
    tasks: Task[], toggleCompleted: (task: Task) => void, 
    changeFocusedTask: (task: Task) => void, 
    showBar: boolean,
    title: string
  }
) {
  const [list, setList] = useState<Task[]>([])
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDueDate, setTaskDueDate] = useState<string|null>(null)
  const [taskTimeDue, setTaskTimeDue] = useState<string|null>(null)
  
  
  const updateTaskTitle = (changeHandler: React.ChangeEvent<HTMLInputElement>) => {
    const data = changeHandler.target.value
    setTaskTitle(data)
    console.log(taskTitle)
  }
  
  const updateTaskDueDate = (date: string) => {
    setTaskDueDate(date)
    console.log(date)
  }

  const updateTaskTimeDue = (time: string) => {
    setTaskTimeDue(time)
  }

  const addTaskOnEnter =  async(
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if(event.key === 'Enter' && taskTitle != '') {
      const taskToAdd = new Task(taskTitle)
      taskToAdd.id = Math.floor(Date.now())
      taskToAdd.dueDate = taskDueDate ? Date.parse(taskDueDate) : null;
      taskToAdd.timeDue = taskTimeDue ? Date.parse(taskDueDate! + " " + taskTimeDue) : null; // TODO: make sure to make time button greyed out and unclickable if date not selected
      await addTask('task', taskToAdd)
      setTaskTitle("")
      setTaskDueDate(null)
      setTaskTimeDue(null)
    }
    
  }

  useEffect(() => {
    const data = tasks.slice(0)
    setList(tasks)
  }, []
  )

  return (
    <div className="ListView" id = "ListView">
      
      <BigBoldTitle name = {title}/>
      
      <div className='addTaskDiv'>
      {
        showBar && 
        <div className = "addTaskInputAndIcon">
          <input 
            className='addTaskInput'
            placeholder='Add an item'
            onKeyDown={addTaskOnEnter}
            onChange={updateTaskTitle}
            value={taskTitle}
          />
          <div className = 'calendarIcon'>
            <CalendarButton label = {null} setTaskDueDate = {updateTaskDueDate}/>
            <TimePickerButton  label = {null} setTaskTimeDue = {updateTaskTimeDue}/>
          </div>
        </div>
      } 
      
      </div>
        {
        tasks.length === 0 ? 
          <EmptyPage icon = "post_add" label = '"Rest is a fine medicine" - Thomas Carlyle'/>
        : 
          <List 
            tasks = {tasks}
            toggleCompleted = {toggleCompleted}
            changeFocusedTask = {(task: Task) => changeFocusedTask(task)}
          />
          
        }
    </div>
  );
}

export default ListView;

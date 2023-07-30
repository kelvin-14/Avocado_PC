import '../../css/ListView.css'
import { useEffect, useState } from 'react'
import Task from '../../objects/Task'
import TaskListItem from './TaskListItem'

function ListView(
  {addItem, tasks}: {addItem: (tableName: string, object: object) => void , tasks: () => Task[]}
) {
  const [list, setList] = useState<Task[]>([])
  const [inputString, setInputString] = useState("")
  
  const updateInputString = (changeHandler: React.ChangeEvent<HTMLInputElement>) => {
    const data = changeHandler.target.value
    setInputString(data)
    console.log(inputString)
  }

  const addTaskOnEnter =  async(
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if(event.key === 'Enter' && inputString != '') {
      await addItem('task', {title: inputString})
    }
    
  }

  useEffect(() => {
    const data = tasks().slice(0)
    setList(tasks)
  }, []
  )

  return (
    <div className="ListView">

      <div className='addTaskDiv'>
        <input 
          className='addTaskInput'
          placeholder='Add an item'
          onKeyDown={addTaskOnEnter}
          onChange={updateInputString}
        />
      </div>
        

        {
          tasks().map(task => {
            return(
              <TaskListItem key = {task.id} id = {task.id} title = {task.title}/>
            )
          })
        }

        

    </div>
  );
}

export default ListView;

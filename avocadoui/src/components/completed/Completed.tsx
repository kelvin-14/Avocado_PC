import {useState, useEffect} from 'react'
import Task from '../../objects/Task';
import TaskListItem from '../tasks/TaskListItem';

function Completed(
    {completedTasks, toggleCompleted}:
    {completedTasks: Task[], toggleCompleted: (task: Task) => void}
) {


    return(
        <div className = "Completed">
            {completedTasks.map(task => {
                return(
                    <TaskListItem 
                        task={task} 
                        toggleCompleted={toggleCompleted}
                        changeFocusedTask={() => {}}
                        closeDetailsDiv = {()=>{}}
                    />
                )
            })}
        </div>
    )
}

export default Completed;
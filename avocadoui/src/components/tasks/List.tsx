import Task from "../../objects/Task";
import TaskListItem from "./TaskListItem";

function List(
    {tasks, toggleCompleted, changeFocusedTask, closeDetailsDiv}:
    {tasks: Task[], toggleCompleted: (task: Task) => void, changeFocusedTask: (task: Task) => void, closeDetailsDiv: ()=>void}
) {
  return (
    <div className="List">
        {   
            tasks.map(task => {
                return(
                    <TaskListItem 
                        key = {task.id} 
                        task = {task} 
                        toggleCompleted = {toggleCompleted} 
                        changeFocusedTask = {() => {changeFocusedTask(task)}}
                        closeDetailsDiv = {closeDetailsDiv}
                    />
                )
            })
        }
    </div>
  );
}

export default List;

import Task from "../../objects/Task";
import TaskListItem from "./TaskListItem";

function List(
    {tasks, toggleCompleted, changeFocusedTask}:
    {tasks: Task[], toggleCompleted: (task: Task) => void, changeFocusedTask: (task: Task) => void}
) {
  return (
    <div className="List">
        {   
            tasks.map(task => {
                return(
                    <TaskListItem key = {task.id} task = {task} toggleCompleted = {toggleCompleted} changeFocusedTask = {() => {changeFocusedTask(task)}}/>
                )
            })
        }
    </div>
  );
}

export default List;

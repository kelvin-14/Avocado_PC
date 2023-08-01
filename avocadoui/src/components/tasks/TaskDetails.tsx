import { useEffect, useState } from 'react';
import '../../css/TaskDetails.css'
import Task from '../../objects/Task';

function TaskDetails(
    {focusedTask}: {focusedTask: Task | undefined}
) {
  const [task, setTask] = useState<Task>()

  useEffect(() => {
    setTask(focusedTask)
  }) 

  return (
    <div className="TaskDetails">
        <p>{task?.title}</p>
    </div>
  );
}

export default TaskDetails;

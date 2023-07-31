import '../../css/Tasks.css'
import Task from '../../objects/Task';
import FilterBar from './FilterBar';
import ListView from './ListView';

function Tasks(
  {addItem, tasks, toggleCompleted}: 
  {addItem: (tableName: string, object: object) => void, tasks: () => Task[], toggleCompleted: (task: Task) => void}
) {

  return (
    <div className="Tasks">
        <FilterBar catgoryName = "some category"/>
        <ListView
          addItem = {addItem}
          tasks = {tasks}
          toggleCompleted = {toggleCompleted}
        />
        <FilterBar catgoryName = "some category"/>
    </div>
  );
}

export default Tasks;

import '../../css/Tasks.css'
import Task from '../../objects/Task';
import FilterBar from './FilterBar';
import ListView from './ListView';

function Tasks(
  {addItem, tasks}: {addItem: (tableName: string, object: object) => void, tasks: () => Task[]}
) {

  return (
    <div className="Tasks">
        <FilterBar catgoryName = "some category"/>
        <ListView
          addItem = {addItem}
          tasks = {tasks}
        />
    </div>
  );
}

export default Tasks;

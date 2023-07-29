import '../../css/Tasks.css'
import FilterBar from './FilterBar';
import ListView from './ListView';

function Tasks(
  {addItem}: {addItem: (tableName: string, object: object) => void}
) {

  return (
    <div className="Tasks">
        <FilterBar catgoryName = "some category"/>
        <ListView
          addItem = {addItem}
        />
    </div>
  );
}

export default Tasks;

import '../../css/Tasks.css'
import FilterBar from './FilterBar';
import ListView from './ListView';

function Tasks() {

  return (
    <div className="Tasks">
        <FilterBar catgoryName = "some category"/>
        <ListView/>
    </div>
  );
}

export default Tasks;

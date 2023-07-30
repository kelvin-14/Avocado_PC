import '../../css/Tasks.css'
import ListItem from '../../objects/ListItem';
import FilterBar from './FilterBar';
import ListView from './ListView';

function Tasks(
  {addItem, listItems}: {addItem: (tableName: string, object: object) => void, listItems: () => ListItem[]}
) {

  return (
    <div className="Tasks">
        <FilterBar catgoryName = "some category"/>
        <ListView
          addItem = {addItem}
          listItems = {listItems}
        />
    </div>
  );
}

export default Tasks;

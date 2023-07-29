import '../../css/ListView.css'

function ListView(
  {addItem}: {addItem: (tableName: string, object: object) => void }
) {

  const addTaskOnEnter = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    console.log(`user pressed ${event.key}`)
    if(event.key === 'Enter') {
      console.log("Enter was pressed")
      addItem('tasks', {id: 3, title: "dummy task"})
    }
    
  }

  return (
    <div className="ListView">
        <input 
          placeholder='Add an item'
          onKeyDown={addTaskOnEnter}
        />
    </div>
  );
}

export default ListView;

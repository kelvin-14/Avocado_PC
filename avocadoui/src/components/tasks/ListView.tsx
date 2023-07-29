import '../../css/ListView.css'
import { useState } from 'react'

function ListView(
  {addItem}: {addItem: (tableName: string, object: object) => void }
) {

  const [inputString, setInputString] = useState("")

  const updateInputString = (changeHandler: React.ChangeEvent<HTMLInputElement>) => {
    const data = changeHandler.target.value
    setInputString(data)
    console.log(inputString)
  }

  const addTaskOnEnter = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if(event.key === 'Enter' && inputString != '') {
      addItem('tasks', {title: inputString})
    }
    
  }

  return (
    <div className="ListView">
        <input 
          placeholder='Add an item'
          onKeyDown={addTaskOnEnter}
          onChange={updateInputString}
        />
    </div>
  );
}

export default ListView;

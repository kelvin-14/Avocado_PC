import '../../css/ListView.css'
import { useEffect, useState } from 'react'
import ListItem from '../../objects/ListItem'

function ListView(
  {addItem, listItems}: {addItem: (tableName: string, object: object) => void , listItems: () => Promise<any>}
) {
  var [items, setItems] = useState<ListItem[]>([])
  useEffect(() => {
      const getItems = async() => {
        setItems(await listItems())
        console.log(`got the items ${items.length}`)
      }
      getItems()
    }
  )

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

  const litems = [new ListItem("dfdsfsd"), new ListItem("234324")]
  return (
    <div className="ListView">
        <input 
          placeholder='Add an item'
          onKeyDown={addTaskOnEnter}
          onChange={updateInputString}
        />

        <ul>
          <li>some item here</li>
        {
        items.map(item => <li>{item.title}</li>)} 

        </ul>
        

    </div>
  );
}

export default ListView;

import '../../css/ListView.css'
import { useEffect, useState } from 'react'
import ListItem from '../../objects/ListItem'

function ListView(
  {addItem, listItems}: {addItem: (tableName: string, object: object) => void , listItems: () => ListItem[]}
) {
  const [list, setList] = useState<ListItem[]>([])

  useEffect(() => {
    const data = listItems().slice(0)
    setList(listItems)
  }, []
  )

  const [inputString, setInputString] = useState("")

  const updateInputString = (changeHandler: React.ChangeEvent<HTMLInputElement>) => {
    const data = changeHandler.target.value
    setInputString(data)
    console.log(inputString)
  }

  const addTaskOnEnter =  async(
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if(event.key === 'Enter' && inputString != '') {
      await addItem('tasks', {title: inputString})
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

        {
          listItems().map(listItem => {
            return(
              <div key = {listItem.id}>
                    {listItem.title}
              </div>
            )
          })
        }

        

    </div>
  );
}

export default ListView;

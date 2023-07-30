import { useEffect, useState } from 'react';
import Menu from './Menu';
import MainView from './MainView';
import '../css/App.css'
import IDXDB from '../db/db';
import Task from '../objects/Task';
import Category from '../objects/Category';

const avocadoDatabase = new IDXDB("AvocadoDatabase")

const createTables = async() => {
  await avocadoDatabase.createTable(["task", "category"])
}

function App() {
  const [menuIndex, setMenuIndex] = useState(0)
  const [taskList, setTaskList] = useState<Task[]>([])
  const [categoryList, setCategoryList] = useState<Category[]>([])

  const changeMenuIndex = (newIndex: number) => {
    setMenuIndex(newIndex)
    console.log(menuIndex)
  }

  const updateTaskList = async() => {
    const data = await avocadoDatabase.getAllValue('task')
    setTaskList(data)
  }

  const updateCategoryList = async() => {
    const data = await avocadoDatabase.getAllValue('category')
    setCategoryList(data)
  }

  useEffect(() => {
    const run = async () => {
      await createTables()
      await updateTaskList()
      await updateCategoryList()
    }
    run()
  }, [])

  return (
    <div className="App">
      <Menu changePageIndex={changeMenuIndex}/>
      <MainView 
        menuIndex = {menuIndex}
        addTask = {(tableName: string, object: object) => {avocadoDatabase.putValue(tableName, object); updateTaskList()}}
        tasks = { () => (taskList) }
      />
    </div>
  );
}

export default App;

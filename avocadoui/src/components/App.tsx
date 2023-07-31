import React, { useContext, useEffect, useState } from 'react';
import Menu from '../components/menu/Menu';
import MainView from './MainView';
import '../css/App.css'
import IDXDB from '../db/db';
import Task from '../objects/Task';
import Category from '../objects/Category';

const avocadoDatabase = new IDXDB("AvocadoDatabase")

const createTables = async() => {
  await avocadoDatabase.createTable(["task", "category"])
}

const App: React.FC =  () => {
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

  const setDarkTheme = () => {
    document.querySelector("body")?.setAttribute('data-theme', 'dark')
  }

  const setLightTheme = () => {
    document.querySelector("body")?.setAttribute('data-theme', 'light')
  }

  const toggleTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.checked) setDarkTheme()
    else setLightTheme()
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
      <input type = "checkbox" onChange = {(e) => toggleTheme(e)}/>
        <Menu 
          changePageIndex={changeMenuIndex}
          menuIndex = {menuIndex}
        />
        <MainView 
          menuIndex = {menuIndex}
          addTask = {(tableName: string, object: object) => {avocadoDatabase.putValue(tableName, object); updateTaskList()}}
          tasks = { () => (taskList) }
          toggleCompleted = {(task: Task) => {avocadoDatabase.toggleTaskCompleted(task); updateTaskList()}}
        />
        </div>
  );
}

export default App;

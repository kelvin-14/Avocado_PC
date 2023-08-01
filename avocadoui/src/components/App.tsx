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
  const [tasks, setTasks] = useState<Task[]>([])
  const [categoryList, setCategoryList] = useState<Category[]>([])

  const changeMenuIndex = (newIndex: number) => {
    setMenuIndex(newIndex)
    console.log(menuIndex)
  }

  const updateTasks = async() => {
    const data = await avocadoDatabase.getAllValue('task')
    setTasks(data)
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
      await updateTasks()
      await updateCategoryList()
    }
    run()
  }, [])

  return (
    <div className="App">
        <Menu 
          toggleTheme = {toggleTheme}
          changePageIndex={changeMenuIndex}
          menuIndex = {menuIndex}
        />
        <MainView 
          menuIndex = {menuIndex}
          addTask = {(tableName: string, object: object) => {avocadoDatabase.putValue(tableName, object); updateTasks()}}
          tasks = { tasks }
          toggleCompleted = {(task: Task) => {avocadoDatabase.toggleTaskCompleted(task); updateTasks()}}
        />
        </div>
  );
}

export default App;

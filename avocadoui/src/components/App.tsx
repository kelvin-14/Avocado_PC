import { useEffect, useState } from 'react';
import Menu from './Menu';
import MainView from './MainView';
import '../css/App.css'
import IDXDB from '../db/db';

const setupDB = async () => {
  const avocadoDatabase = new IDXDB("AvocadoDatabase")
  await avocadoDatabase.createTable("tasks")
  await avocadoDatabase.putValue("tasks", {id: 1, title: "some task"}) 
}


function App() {
  useEffect(() => {
    setupDB();
  }, [])

  const [menuIndex, setMenuIndex] = useState(0)
  

  const changeMenuIndex = (newIndex: number) => {
    setMenuIndex(newIndex)
    console.log(menuIndex)
  }

  return (
    <div className="App">
      <Menu changePageIndex={changeMenuIndex}/>
      <MainView menuIndex = {menuIndex}/>
    </div>
  );
}

export default App;

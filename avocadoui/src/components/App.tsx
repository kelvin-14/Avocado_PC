import { useEffect, useState } from 'react';
import Menu from './Menu';
import MainView from './MainView';
import '../css/App.css'
import IDXDB from '../db/db';

function App() {
  const avocadoDatabase = new IDXDB("AvocadoDatabase")
  useEffect(() => {
    const run = async () => {
      await avocadoDatabase.createTable("tasks")
    }
    run()
    
  }, [])

  const [menuIndex, setMenuIndex] = useState(0)
  

  const changeMenuIndex = (newIndex: number) => {
    setMenuIndex(newIndex)
    console.log(menuIndex)
  }

  return (
    <div className="App">
      <Menu changePageIndex={changeMenuIndex}/>
      <MainView 
        menuIndex = {menuIndex}
        addItem = {(tableName: string, object: object) => {avocadoDatabase.putValue(tableName, object)}}
      />
    </div>
  );
}

export default App;

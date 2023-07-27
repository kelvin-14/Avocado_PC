import { useState } from 'react';
import Menu from './Menu';
import MainView from './MainView';
import '../css/App.css'

function App() {

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

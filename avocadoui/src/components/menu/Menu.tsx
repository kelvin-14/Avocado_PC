import React, { useContext } from 'react';
import '../../css/Menu.css'
import MenuTab from './MenuTab';

function Menu(props: any) {

  return (
    <div className="Menu">
        <ul>
          <li>
            <MenuTab
              icon = 'check_circle'
              name= 'Tasks' 
              onClick= {() => props.changePageIndex(0)}
              bgColor= {props.menuIndex === 0 ? 'gray' : 'white'}
            />
          </li>
          <li>
            <MenuTab
              icon = 'done'
              name= 'Completed' 
              onClick= {() => props.changePageIndex(1)}
              bgColor= {props.menuIndex === 1 ? 'gray' : 'white'}
            />
          </li>
          <li>
            <MenuTab
              icon = 'settings'
              name= 'Settings' 
              onClick= {() => props.changePageIndex(2)}
              bgColor= {props.menuIndex === 1 ? 'gray' : 'white'}
            />
          </li>
          <li>
            <input type = "checkbox" onChange = {(e) => props.toggleTheme(e)}/>
          </li>
        </ul>
    </div>
  );
}

export default Menu;

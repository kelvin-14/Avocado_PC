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
              menuIndex = {props.menuIndex}
              thisIndex = {0}
            />
          </li>
          <li>
            <MenuTab
              icon = 'done'
              name= 'Completed' 
              onClick= {() => props.changePageIndex(1)}
              menuIndex = {props.menuIndex}
              thisIndex = {1}
            />
          </li>
          <li>
            <MenuTab
              icon = 'settings'
              name= 'Settings' 
              onClick= {() => props.changePageIndex(2)}
              menuIndex = {props.menuIndex}
              thisIndex = {2}
            />
          </li>
        </ul>
    </div>
  );
}

export default Menu;

import React from 'react';
import '../css/Menu.css'

function Menu(props: any) {
  return (
    <div className="Menu">
        <ul>
            <li><button onClick={() => props.changePageIndex(0)}>Tasks</button></li>
            <li><button onClick={() => props.changePageIndex(1)}>Completed</button></li>
            <li><button onClick={() => props.changePageIndex(2)}>Calendar</button></li>
            <li><button onClick={() => props.changePageIndex(3)}>Sync</button></li>
        </ul>
    </div>
  );
}

export default Menu;

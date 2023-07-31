import React, { useContext } from 'react';
import '../../css/MenuTab.css'

function MenuTab(props: any) {

  return (
    <div className="MenuTab">
      <button 
          className='menuButton'
          onClick={props.onClick}
      >
        <div className='menuIcon'>
          <span className="material-symbols-outlined">
            {props.icon}
          </span>
        </div>
        
        {props.name}
      </button>
    </div>
  );
}

export default MenuTab;

import React, { useContext } from 'react';
import '../../css/MenuTab.css'

function MenuTab(props: any) {

  return (
    <div className="MenuTab">
        <button 
            onClick={props.onClick}
        >{props.name}</button>
    </div>
  );
}

export default MenuTab;

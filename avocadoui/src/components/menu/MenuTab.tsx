import React, { useContext } from 'react';
import '../../css/MenuTab.css'

function MenuTab(props: any) {

  return (
    <div className="MenuTab">
      <button 
          className='menuButton'
          onClick={props.onClick}
          style={
            props.menuIndex === props.thisIndex ?
            {
              backgroundColor: "var(--gray-highlight)"
            } : 
            {
              
            }
          }
      >
        <div className='menuIcon'>
          <span className="material-symbols-outlined" style={
            props.menuIndex === props.thisIndex ?
            {
              color: "var(--background)"
            } : 
            {
            }}>
            {props.icon}
          </span>
        </div>
        
        <p style={
            props.menuIndex === props.thisIndex ?
            {
              color: "var(--background)"
            } : 
            {
              
            }}>{props.name}</p>
      </button>
    </div>
  );
}

export default MenuTab;

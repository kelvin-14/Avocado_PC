import React from 'react';
import '../../css/CategoryTab.css'

function CategoryTab(props: any) {
  return (
    <div className="CategoryTab">
        <button className= "CategoryButton">
            {props.categoryName}
        </button>
    </div>
  );
}

export default CategoryTab;

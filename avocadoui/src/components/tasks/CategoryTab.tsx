import React from 'react';
import '../../css/CategoryTab.css'

function CategoryTab(props: any) {
  return (
    <div className="CategoryTab">
        <button>
            {props.categoryName}
        </button>
    </div>
  );
}

export default CategoryTab;

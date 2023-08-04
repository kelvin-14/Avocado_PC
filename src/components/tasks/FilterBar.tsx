import React from 'react';
import CategoryTab from './CategoryTab';
import '../../css/FilterBar.css'

function FilterBar(props: any) {
  return (
    <div className="FilterBar">
        <p>Filters</p>
        <ul className = "filterTopBarList">
            <CategoryTab categoryName = "All"/>
            <CategoryTab categoryName = "Due in x days"/>
            <CategoryTab categoryName = "Sort by"/>
            <CategoryTab categoryName = "Is in category x"/>
        </ul>

        <p>Categories</p>
        <ul className = "filterTopBarList">
            <CategoryTab categoryName = "Shopping"/>
            <CategoryTab categoryName = "Work"/>
            <CategoryTab categoryName = "School"/>
        </ul>

        <p>Completed</p>

    </div>
  );
}

export default FilterBar;

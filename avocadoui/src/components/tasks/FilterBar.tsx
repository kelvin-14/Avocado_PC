import React from 'react';
import CategoryTab from './CategoryTab';
import '../../css/shared.css'
import '../../css/FilterBar.css'

function FilterBar(props: any) {
  return (
    <div className="FilterBar">
        <ul className = "filterTopBarList">
            <CategoryTab categoryName = "some category"/>
            <CategoryTab categoryName = "some category"/>
            <CategoryTab categoryName = "some category"/>
            <CategoryTab categoryName = "some category"/>
            <CategoryTab categoryName = "some category"/>
            <CategoryTab categoryName = "some category"/>
            <CategoryTab categoryName = "some category"/>
            <CategoryTab categoryName = "some category"/>
            <CategoryTab categoryName = "some category"/>
            <CategoryTab categoryName = "some category"/>
            <CategoryTab categoryName = "some category"/>
            <CategoryTab categoryName = "some category"/>
            <CategoryTab categoryName = "some category"/>
            <CategoryTab categoryName = "some category"/>
            <CategoryTab categoryName = "some category"/>
            <CategoryTab categoryName = "some category"/>
            <CategoryTab categoryName = "some category"/>
            <CategoryTab categoryName = "some category"/>
            <CategoryTab categoryName = "some category"/>
            <CategoryTab categoryName = "some category"/>
            <CategoryTab categoryName = "some category"/>
            <CategoryTab categoryName = "some category"/>
        </ul>
    </div>
  );
}

export default FilterBar;

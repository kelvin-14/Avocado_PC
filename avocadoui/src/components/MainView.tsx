import { useEffect } from 'react';
import '../css/MainView.css'
import ListItem from '../objects/ListItem';
import Tasks from './tasks/Tasks';

function MainView(
    {menuIndex, addItem, listItems} : 
    { menuIndex: number, addItem: (tableName: string, object: object) => void, listItems: () => ListItem[]}
    ) {
        
    useEffect(() => {
        console.log("in main menu")
        console.log(listItems.length)
    })

    let pageToShow = <p>Error</p>;
    switch (menuIndex) {
        case 0:
            pageToShow = < Tasks
                addItem = {addItem}
                listItems = {listItems}
                />
            break;

        case 1:
            pageToShow = <p>Completed</p>
            break;

        case 2:
            pageToShow = <p>Calendar</p>
            break;

        case 3:
            pageToShow =  <p>Sync</p>
            break;

        default:
            <p>Error</p>;
    }

    return (
        <div className="MainView">
            {pageToShow}
        </div>
    );
}

export default MainView;

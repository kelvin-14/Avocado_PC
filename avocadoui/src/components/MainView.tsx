import { useEffect } from 'react';
import '../css/MainView.css'
import Tasks from './tasks/Tasks';
import Task from '../objects/Task';

function MainView(
    {menuIndex, addTask, tasks} : 
    { menuIndex: number, addTask: (tableName: string, object: object) => void, tasks: () => Task[]}
    ) {
        
    let pageToShow = <p>Error</p>;
    switch (menuIndex) {
        case 0:
            pageToShow = < Tasks
                addItem = {addTask}
                tasks = {tasks}
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

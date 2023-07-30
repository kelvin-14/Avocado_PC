import { useEffect } from 'react';
import '../css/MainView.css'
import Tasks from './tasks/Tasks';
import Task from '../objects/Task';
import Completed from './completed/Completed';

function MainView(
    {menuIndex, addTask, tasks, toggleCompleted} : 
    { menuIndex: number, addTask: (tableName: string, object: object) => void, tasks: () => Task[], toggleCompleted: (task: Task) => void}
    ) {
        
    let pageToShow = <p>Error</p>;
    switch (menuIndex) {
        case 0:
            const notCompletedTasks = tasks().filter(it => it.completed === false)
            pageToShow = < Tasks
                addItem = {addTask}
                tasks = {() => notCompletedTasks}
                toggleCompleted = {toggleCompleted}
                />
            break;

        case 1:
            const completedTasks = tasks().filter(it => it.completed === true)
            pageToShow = <Completed completedTasks={completedTasks} toggleCompleted={toggleCompleted}/>
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

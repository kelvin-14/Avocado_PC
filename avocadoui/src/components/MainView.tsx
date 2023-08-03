import { useEffect } from 'react';
import '../css/MainView.css'
import Tasks from './tasks/Tasks';
import Task from '../objects/Task';
import Completed from './completed/Completed';
import CalendarTest from './tasks/CalendarTest';
import CalendarButton from './tasks/CalendarButton';
import TimePickerButton from './tasks/TimePickerButton';
import Settings from './settings/Settings';

function MainView(
    {menuIndex, addTask, tasks, toggleCompleted, toggleTheme, theme} : 
    { menuIndex: number, 
      addTask: (tableName: string, object: object) => void, 
      tasks: Task[], toggleCompleted: (task: Task) => void, 
      toggleTheme: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
      theme: string
    }
    ) {
        
    let pageToShow = <p>Error</p>;
    switch (menuIndex) {
        case 0:
            const notCompletedTasks = tasks.filter(it => it.completed === false)
            pageToShow = < Tasks
                addItem = {addTask}
                tasks = {notCompletedTasks}
                toggleCompleted = {toggleCompleted}
                showBar = {true}
                />
            break;

        case 1:
            const completedTasks = tasks.filter(it => it.completed === true)
            pageToShow = < Tasks
                addItem = {()=> {}}
                tasks = {completedTasks}
                toggleCompleted = {toggleCompleted}
                showBar = {false}
                />
            break;

        case 2:
            pageToShow = <Settings
              toggleTheme = {toggleTheme}
              theme = {theme}
              />
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

import '../css/MainView.css'
import Tasks from './tasks/Tasks';
import Task from '../objects/Task';
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

        const pageTitles = ["Tasks", "Completed", "Settings"]
        let pageToShow = <p>Error</p>;
        switch (menuIndex) {
            case 0:
                const notCompletedTasks = tasks.filter(it => it.completed === false)
                pageToShow = < Tasks
                    addItem = {addTask}
                    tasks = {notCompletedTasks}
                    toggleCompleted = {toggleCompleted}
                    showBar = {true}
                    title = {"Tasks"}
                    />
                break;

            case 1:
                const completedTasks = tasks.filter(it => it.completed === true)
                pageToShow = < Tasks
                    addItem = {()=> {}}
                    tasks = {completedTasks}
                    toggleCompleted = {toggleCompleted}
                    showBar = {false}
                    title = {"Completed"}
                    />
                break;

            case 2:
                pageToShow = <Settings
                toggleTheme = {toggleTheme}
                theme = {theme}
                title = {"Settings"}
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
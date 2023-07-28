import '../css/MainView.css'
import Tasks from './tasks/Tasks';

function MainView(props: any) {
    

    let pageToShow = <p>Error</p>;
    switch (props.menuIndex) {
        case 0:
            pageToShow = <Tasks/>
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

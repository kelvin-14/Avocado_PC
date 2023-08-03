import '../../css/Settings.css'
import BigBoldTitle from '../shared/BigBoldTitle';

const Settings =  (
  {toggleTheme, theme, title}: 
  {
    toggleTheme: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    theme:string
    title: string
  }
) => {
    return (
      <div className="Settings">
        <BigBoldTitle name = {title} />
          <button className='dark-mode-button' onClick={(e) => {toggleTheme(e)}}>
            {
              theme === 'dark' ?
              <span className="material-symbols-outlined">
                light_mode
              </span>
              :
              <span className="material-symbols-outlined">
                dark_mode
              </span>
            }
            <p>{theme === 'dark' ? "Light Mode" : "Dark Mode"}</p>
          </button>
      </div>
    );
  }
  
  export default Settings;
  
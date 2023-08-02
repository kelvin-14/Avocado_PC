import '../../css/Settings.css'

const Settings =  (
  {toggleTheme, theme}: 
  {
    toggleTheme: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    theme:string
  }
) => {
    return (
      <div className="Settings">
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
  
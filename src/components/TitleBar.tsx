import '../css/TitleBar.css'

const close = () => {
    window.close()
}

const TitleBar =  () => {
    return (
      <div className="TitleBar">
        <div id = "title">Avoca.do</div>
        <div id = 'menu'>
            <button className = "titleBarButton">
                <span className="material-symbols-outlined">
                    remove
                </span>
            </button>
            <button className = "titleBarButton">
                <span className="material-symbols-outlined">
                    check_box_outline_blank
                </span>
            </button>
            <button className = "titleBarButton" onClick = {close}>
                <span className="material-symbols-outlined">
                    close
                </span>
            </button>
        </div>  
      </div>
    );
  }
  
  export default TitleBar;
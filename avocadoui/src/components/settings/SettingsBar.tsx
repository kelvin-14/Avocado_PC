import '../../css/SettingsBar.css'
import CategoryTab from '../tasks/CategoryTab';

function SettingsBar(props: any) {
  return (
    <div className="SettingsBar">
        <ul className = "settingsTopBarList">
            <CategoryTab categoryName = "Account"/>
            <CategoryTab categoryName = "Appearance"/>
        </ul>

    </div>
  );
}

export default SettingsBar;

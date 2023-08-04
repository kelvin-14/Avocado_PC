import '../../css/EmptyPage.css'

function EmptyPage(
    {icon, label} : {icon: string, label:string}
) {
  return (
    <div className="EmptyPage">
        <span className="material-symbols-outlined">
            {icon}
        </span>
        <p>{label}</p>
    </div>
  );
}

export default EmptyPage;

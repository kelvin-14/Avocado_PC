import "../../css/BigBoldTitle.css"

const BigBoldTitle =  (
    {name}: {name: string}
) => {
    return (
      <div className="BigBoldTitle">
        <p>{name}</p>
      </div>
    );
  }
  
  export default BigBoldTitle;
import { MdDelete } from "react-icons/md";
function Items({name,date,Ondeleteclick}) {

  return (
    <div className="container ">
      <div className="row container-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger button-container"
          onClick={()=>Ondeleteclick(name)}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Items;

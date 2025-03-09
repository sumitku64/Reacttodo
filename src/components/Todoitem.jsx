import Items from "./Items";
function Todoitem({todo,deletetodo}){
       return <div className="items">
        {todo.map((Item) =>  <Items key={Item.tasks} name={Item.tasks} date={Item.date} Ondeleteclick={deletetodo}/>  )}
      </div>
}
export default Todoitem;
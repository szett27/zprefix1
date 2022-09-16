import { useEffect, useState, useReducer } from "react"







function Inventory(props){

   
    const [description, setDescription] = useState()
    const[quantity, setQuantity] = useState()
    const[item_name, setItemName] = useState()
    const [editable, setEditable] = useState()
    const[singleItem, setSingleItem] = useState()
    const [items, setItems] = useState([])
    const [ignored, forceUpdate] = useReducer(x=>x+1, 0)
    const devstring = 'http://localhost:5000'
    useEffect(()=>{
        fetch(devstring + '/inventory')
        .then((res)=>res.json())
        .then(data=> setItems(data))
    }, [forceUpdate]);


    let updateButtons = <div>           
    <button onClick={(e)=>deleteItem(e)}>Delete</button>
    {singleItem > 0 ? <button onClick={()=>setSingleItem(0)}>Back to Full Inventory</button>: ''}
    {!editable ? <button onClick={()=>setEditable(true)}>Edit</button>: <div><button onClick={(e)=>updateItem(e)}>Update: {item_name}</button></div> }
    </div>;


    let createANewItem = 
        <div>
            <h2>Create New Item</h2>
            <form onSubmit={(e)=>createItem(e)}>
                <label>Item Name<input value = {item_name}onChange ={(e)=>setItemName(e.target.value)}/></label>
                <label>Description<input value = {description} onChange ={(e)=>setDescription(e.target.value)}/></label>
                <label>Quantity<input type = 'text-field' value = {quantity} onChange ={(e)=>setQuantity(e.target.value)}/></label>
                <button type = 'submit'>Create Item</button>
                <button onClick={()=>props.setNewItem(false)}>Back to Full Inventory</button>
            </form>
        </div>;

 
let oneItemView = 
       <div>
        <div class = "card-body">
        <h3 class = "card-title" value = {item_name} onChange={(e)=>setItemName(e.target.value)}contentEditable = {editable}>{item_name}</h3>
        <p class = "card-text" contentEditable = {editable}>{description}</p>
        <p contentEditable = {editable} onChange={(e)=>setQuantity()}>Quantity: {quantity}</p>
        {props.login ? updateButtons :   <button onClick={()=>setSingleItem(0)}>Back to Full Inventory</button> }
        </div>
</div>



let completeInventory = <div>
    {items.map((item, i)=>{
        return(
        <div id = {i} className = "card">
        <div class = "card-body">
        <h3 class = "card-title" onClick = {()=>{
            setSingleItem(item.item_id)
            setItemName(item.item_name)
            setDescription(item.description)
            setQuantity(item.quantity)
        }
        } 
        value = {item_name} onChange={(e)=>setItemName(e.target.value)}contentEditable = {editable}>{item.item_name}</h3>
        <p class = "card-text" contentEditable = {editable}>{item.description}</p>
        <p contentEditable = {editable} onChange={(e)=>setQuantity()}>Quantity: {item.quantity}</p>
        {props.login ? updateButtons : <p>Coming Soon For Purchase!</p>}
        </div>
        </div>

        )
    })}
    </div>;


function deleteItem(e){
    e.preventDefault();
   if(window.confirm(`Are you sure you want to delete ${item_name} ?`)){
    fetch("http://localhost:5000/delete/" + singleItem, {method: 'DELETE'})
    .then(res=>res.json())
    .then(setSingleItem(0))
   }
}


function createItem(e){
    e.preventDefault();
    const data = {
        'item_name': item_name,
        'quantity': quantity,
        'description': description
    }

    fetch('http://localhost:5000/item', 
    {method: 'POST', 
     headers: {
    'Content-Type': 'application/json',
  }, 
  body: JSON.stringify(data)})
.then(res=>res.json())
.then(setSingleItem(0))
.then(props.setNewItem(false))
}


function updateItem(e){
	e.preventDefault();
	const data = {
		//"id": id,
		"item_name": item_name,
		"quantity": quantity,
		"description" : description,
        "item_id" : singleItem
	}

	fetch('http://localhost:5000/item', 
	{
	  method: 'PATCH',
	  headers: {'Content-Type': 'application/json'},
	  body: JSON.stringify(data)

	})
	.then(res=>res.json())
	.then(data=>window.alert(`Item: ${data.item_name} updated}`))
    .then(setEditable(false))
    .then(setSingleItem(0))
}

   
    if(props.newItem && props.login){
        return(
            createANewItem
        )
    }
  else if(singleItem > 0){
    return(
        oneItemView
    )
  }
    return completeInventory
        
 }


export default Inventory
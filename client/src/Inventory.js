import { useEffect, useState } from "react"







function Inventory(props){

   
    
    const [newItem, setNewItem] = useState(false)
    const [description, setDescription] = useState()
    const[quantity, setQuantity] = useState()
    const[item_name, setItemName] = useState()
    const [editable, setEditable] = useState()
    const[singleItem, setSingleItem] = useState({ })
    const [items, setItems] = useState([])
    const devstring = 'http://localhost:5000'
    useEffect(()=>{
        fetch(devstring + '/inventory')
        .then((res)=>res.json())
        .then(data=> setItems(data))
    }, []);


    let updateButtons = <div>           
    <button onClick={()=>console.log('Deleted')}>Delete</button>
    {!editable ? <button onClick={()=>setEditable(true)}>Edit</button>: <button onClick={()=>updateItem()}>Update {item_name}</button> }
    </div>;


    let createANewItem = 
        <div>
            <h2>Create New Item</h2>
            <form onSubmit={(e)=>createItem(e)}>
                <label>Item Name<input value = {item_name}onChange ={(e)=>setItemName(e.target.value)}/></label>
                <label>Description<input value = {description} onChange ={(e)=>setDescription(e.target.value)}/></label>
                <label>Quantity<input type = 'text-field' value = {quantity} onChange ={(e)=>setQuantity(e.target.value)}/></label>
            </form>
        </div>;



    let completeInventory = <div>
    <button class = "btn btn-primary" style={{visibility: (props.login) ? 'visible' : 'hidden'} } onClick={()=>setNewItem(true)}>Create New Item</button>
    {items.map((item, i)=>{
        return(
        <div id = {i} className = "card" onClick={()=> setSingleItem(item.item_id)} >
        <div class = "card-body">
        <h3 class = "card-title" value = {item_name} onChange={(e)=>setItemName(e.target.value)}contentEditable = {editable}>{item.item_name}</h3>
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
.then(props.setNewItem(false))
}




function updateItem(e){
	e.preventDefault();
	const data = {
		//"id": id,
		"item_name": item_name,
		"quantity": quantity,
		"description" : description
	}

	fetch('/item', 
	{
	  method: 'POST',
	  headers: {'Content-Type': 'application/json'},
	  body: JSON.stringify(data)

	})
	.then(res=>res.json())
	.then(data=>window.alert(`Item: ${data.item_name} updated}`));
}

   

    if(createANewItem && props.login){
        return(
            createANewItem
        )
    }
    return(
        completeInventory
    )
        
 }


export default Inventory
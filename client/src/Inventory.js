import { useEffect, useState } from "react"







function Inventory(props){

    let updateButtons = <div><button onClick={()=>console.log('Updating')}>Update</button><button onClick={()=>console.log('Deleted')}>Delete</button></div>;
    



    const[singleItem, setSingleItem] = useState({ })
    const [items, setItems] = useState([])
    const devstring = 'http://localhost:5000'
    useEffect(()=>{
        fetch(devstring + '/inventory')
        .then((res)=>res.json())
        .then(data=> setItems(data))
    }, []);

    
    return (
        <div>
        {items.map((item, i)=>{
            return(
            <div id = {i} onClick={()=> setSingleItem(item.item_id)}>
            <p contentEditable = {props.login}>{item.item_name}</p>
            <p contentEditable = {props.login}>{item.description}</p>
            <p contentEditable = {props.login}>Quantity: {item.quantity}</p>
            {props.login ? updateButtons : <p>Coming Soon For Purchase!</p>}
            </div>

            )
        })}
        </div>

    )
}


export default Inventory
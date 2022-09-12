import { useEffect, useState } from "react"



function Inventory(){

    
    const [items, setItems] = useState([])
    const devstring = 'http://localhost:5000'
    useEffect(()=>{
        fetch(devstring + '/inventory')
        .then((res)=>res.json())
        .then(data=> setItems(data))
    }, []);
        console.log(items)
    return (
        <div>
        {items.map((item, i)=>{
            return(
            <div id = {i}>
            <p>{item.item_name}</p>
            <p>{item.description}</p>
            <p>Quantity: {item.quantity}</p>
            <button>Update</button><button>Delete</button>
            </div>

            )
        })}
        </div>

    )
}


export default Inventory
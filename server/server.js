//Server to connect with backend DB
//elephant SQL Back End db d2dbe75f-08ed-4221-8a16-c9ce748e1688 
const express = require('express');
const app = express();
const port = process.env.port || 5000;
const Pool = require('pg').Pool;

//need to change for actual Database
const pool = new Pool({
    connectionString: "postgres://wbhedtqi:k2ptT8uttDODQxz9J4U8INtpvUkIvw5i@jelani.db.elephantsql.com/wbhedtqi",
})

app.use(express.json())
//get all users
app.get("/users", async(req, res)=>{
    try{
        const allUsers =  await pool.query("SELECT * FROM users");
        res.json(allUsers.rows)
    } catch(err){
        console.error(err.message)
    }
})

//get inventory
app.get("/inventory", async(req, res)=>{
    try{
        const allInventory =  await pool.query("SELECT * FROM inventory");
        res.json(allInventory.rows)
    } catch(err){
        console.error(err.message)
    }
})

//delete item
app.delete("/i")



//need to setup routes to comply with user stories

app.listen(port, () => console.log(`Listening on port ${port}`))
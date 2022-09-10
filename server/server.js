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

//Start with generic get routes
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

//get all items a user is a manager 
app.get("/users/id", async(req, res)=>{
    try{
        const userItems =  await pool.query("SELECT * FROM inventory WHERE user_id = $1", [id]);
        res.json(userItems.rows)
    } catch(err){
        console.error(err.message)
    }
})


//create a user and item post route
app.post("/users", async(req, res)=>{
    try{
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const USER_NAME = req.body.USER_NAME;
        const PASSWORD = req.body.PASSWORD;

        const newUser = await pool.query("INSERT INTO users (firstName, lastName, USER_NAME, PASSWORD) VALUES ($1, $2, $3, $4)", [firstName, lastName, USER_NAME, PASSWORD]);
        console.log(req.body)
    } catch(err){
        console.error(err.message)
    }
})

// app.post("/inventory", async(req, res)=>{
//     try{
        
//         //add json body description to inventory

//         const newUser = await pool.query("INSERT INTO users (firstName, lastName, USER_NAME, PASSWORD) VALUES ($1, $2, $3, $4)", [firstName, lastName, USER_NAME, PASSWORD]);
//         console.log(req.body)
//     } catch(err){
//         console.error(err.message)
//     }
// })

app.delete("/users/id", async(req, res)=>{
    try{
        const id = id;
        const allUsers =  await pool.query("DELETE * FROM users WHERE user_id = $1");
        res.json(allUsers.rows)
    } catch(err){
        console.error(err.message)
    }
})



//need to setup routes to comply with user stories

app.listen(port, () => console.log(`Listening on port ${port}`))
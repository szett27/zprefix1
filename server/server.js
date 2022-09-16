//Server to connect with backend DB
//elephant SQL Back End db d2dbe75f-08ed-4221-8a16-c9ce748e1688 
const express = require('express');
const app = express();
const port = process.env.port || 5000;
const Pool = require('pg').Pool;
const cors = require('cors');
const bcrypt = require('bcryptjs')
const path = require('path')

//use express to serve react app
//app.use(express.static(path.join(__dirname, 'build')))

//need to change for actual Database
const pool = new Pool({
    connectionString: "postgres://wbhedtqi:k2ptT8uttDODQxz9J4U8INtpvUkIvw5i@jelani.db.elephantsql.com/wbhedtqi",
})

app.use(express.json())
app.use(cors())

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

app.post("/login", async(req, res)=>{
    try{
        const username = req.body.username;
        const password = req.body.password;
    
        const hash =  await pool.query("SELECT password FROM users WHERE user_name = $1", [username]);
        let hashed = hash.rows[0].password

        if(hashed){
            const validPassword = await bcrypt.compare(password, hashed)
            res.json(validPassword)
        }
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
app.get("/users/:id", async(req, res)=>{
    try{
        const id = req.params.id
        const userItems =  await pool.query("SELECT * FROM inventory WHERE user_id = $1", [id]);
        res.json(userItems.rows)
    } catch(err){
        console.error(err.message)
    }
})


//create a user and item post route
app.post("/register", async(req, res)=>{
    try{

        const firstName = req.body.firstname;
        const lastName = req.body.lastname;
        const USER_NAME = req.body.user_name;
        const hash =  await bcrypt.hash(req.body.password, 1);     

        console.log(hash)

        const newUser = await pool.query("INSERT INTO users (firstName, lastName, user_name, password) VALUES ($1, $2, $3, $4)", [firstName, lastName, USER_NAME, hash]);
        res.json(newUser.rows)
    } catch(err){
        console.error(err.message)
    }
})

app.post("/item", async(req, res)=>{
    try{
        
        const item_name = req.body.item_name;
        const description = req.body.description;
        const quantity = req.body.quantity;
        const user_id = req.body.user_id;
        
       

        const newUser = await pool.query("INSERT INTO inventory (item_name, description, quantity, user_id) VALUES ($1, $2, $3, $4)", [item_name, description, quantity, user_id]);
        console.log(req.body)
    } catch(err){
        console.error(err.message)
    }
})


//update an item's properties
app.patch("/item", async(req, res)=>{
    try{
        const item_name = req.body.item_name;
        const description = req.body.description;
        const quantity = req.body.quantity;
        const item_id = req.body.item_id;
            //look at body and see what's updated and not update
        console.log(description)
        const updateItem = await pool.query("UPDATE inventory SET item_name = $2, description = $3,  quantity =$4 WHERE item_id = $1", [item_id, item_name, description, quantity])
        console.log(updateItem.rows)
    } catch(err){
        console.error(err.message)
    }
});


//delete an item based on it's id
app.delete("/delete/:id", async(req, res)=>{
    try{
        const id = req.params.id;
        const item =  await pool.query("DELETE FROM inventory WHERE item_id = $1", [id]);
        res.json(item.rows)
    } catch(err){
        console.error(err.message)
    }
})


//port should change went not in the dev environment
app.listen(port, () => console.log(`Listening on port ${port}`))
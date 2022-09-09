//Server to connect with backend DB
//elephant SQL Back End db d2dbe75f-08ed-4221-8a16-c9ce748e1688 

const express = require('express');
const app = express;
const port = process.env.port || 5000;
const Pool = require('pg').Pool;

//need to change for actual Database
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
  })



//need to setup routes to comply with user stories

app.listen(port, () => console.log(`Listening on port ${port}`))
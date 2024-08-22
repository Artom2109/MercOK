const {Pool,Client} = require('pg')
const connectionString='postgressql://username:password@localhost:5432/databasename'

const client= new Client ({
    connectionString: connectionString
})
client.connect()
client.query('Select * from public."Student"', (err, res)=> {
    console. log(err,res)
    client.end()
})
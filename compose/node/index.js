const express = require("express")
const mysql = require("mysql")

const con = mysql.createConnection({
    host: "db",
    password: "root",
    database: "nodedb",
    user: "root",
})

con.connect((err) => {
    if(err) throw err
    const sql = `INSERT INTO people(name) values('elisiomualumene')`
    con.query(sql)
    con.end()
})

const app = express()


app.get("/", (req, res) => {
    res.json({message: " everything is ok!"})
})


app.listen(3000, () => {
    console.log("Server is running ok!")
})

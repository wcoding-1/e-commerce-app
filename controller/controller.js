
const pool = require('../db');
const products = require('../query/query')

const getUsers =  (req,res, next)=>{
    pool.query(products,(err, user)=>{
        if(err) return res.send({Error: 403})
        res.send({name:user.rows})

    })
}

module.exports ={
    getUsers
}
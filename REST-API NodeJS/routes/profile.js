const express = require('express')
const mysql = require('mysql')
let router = express.Router()


// connection part starts 

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"Hackathon"
})


conn.connect((err)=>{
    if(err)
        throw (err)
    console.log("Database Connected");
})

// connection ends



router.get('/view/',(req,res)=>{
    let sql = `SELECT * FROM Employee`
    
    let query = conn.query(sql,[],(err,result)=>{
        if(err) throw err

        res.send(JSON.stringify({
            status:200,
            error:null,
            response: result
        }))

        console.log("Data Displayed ")
    })
})

// get Single Profile

router.get('/view/:id/',(req,res)=>{
    let sql = `SELECT * FROM Employee WHERE emp_id=${req.params.id}`
    
    let query = conn.query(sql,[],(err,result)=>{
        if(err) throw err

        res.send(JSON.stringify({
            status:200,
            error:null,
            response: result
        }))

        console.log("Data Displayed...")
    })
})
// create Profile

router.post('/create/',(req,res)=>{
    const data = {
        emp_name:req.body.name,
        yoe:req.body.yoe,
        gender:req.body.gender,
        role:req.body.role,
        location:req.body.location,
        linkedin:req.body.linkedin,
        slack:req.body.slack,
        loginID:req.body.login_id
    }

    let sql = `INSERT INTO Employee SET ?`
    let query = conn.query(sql,data,(err,result)=>{
        if(err) throw err

        res.send(JSON.stringify({
            status:200,
            error:null,
            response:"New Record Added Successfully"
        }))

        console.log("Data Insertion Success")
    })

})

// update Profile 

router.put('/update/',(req,res)=>{
    let sql = `UPDATE Employee SET emp_name='${req.body.name}',
                                   yoe=${req.body.yoe}, 
                                   gender='${req.body.gender}',
                                   role='${req.body.role}',
                                   location='${req.body.location}',
                                   linkedin='${req.body.linkedin}',
                                   slack='${req.body.slack}'
                                   WHERE emp_id=${req.body.id}`
    let query = conn.query(sql,(err,result)=>{
        if(err) throw err
        res.send(JSON.stringify({
            status:200,
            error:null,
            response:"Record Updated Successfully"
        }))
    })


})

// delete Profile

router.delete('/delete/:id/',(req,res)=>{
    let sql = `DELETE FROM Employee WHERE emp_id=${req.params.id}`
    let query = conn.query(sql,(err,result)=>{
        if(err) throw err
        res.send(JSON.stringify({
            status:200,
            error:null,
            response:"Record Deleted Successfully"
        }))
    })
})


module.exports = router
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
// connection part ends


router.get('/view',(req,res)=>{
    let sql = `SELECT * FROM articles`
    
    let query = conn.query(sql,[],(err,result)=>{
        if(err) throw err

        res.send(JSON.stringify({
            status:200,
            error:null,
            response: result
        }))

        console.log("Data Insertion Success")
    })
})


router.get('/view/:id',(req,res)=>{
    let sql = `SELECT * FROM articles WHERE id=${req.params.id}`

    let query = conn.query(sql,[],(err,result)=>{
        if(err) throw err

        res.send(JSON.stringify({
            status:200,
            error:null,
            response: result
        }))

        console.log("Data Insertion Success")
    })
})

router.post('/create',(req,res)=>{
    const data = {
        title:req.body.article_title,
        body:req.body.article_body,
        emp_id: (req.body.article_emp_id || 100)
    }
    
    let sql = `INSERT INTO articles SET ?`
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

router.put('/update',(req,res)=>{
    let sql = `UPDATE articles SET title='${req.body.article_title}',
                                   body='${req.body.article_body}' 
                                   WHERE id=${req.body.article_id}`
    let query = conn.query(sql,(err,result)=>{
        if(err) throw err
        res.send(JSON.stringify({
            status:200,
            error:null,
            response:"Record Updated Successfully"
        }))
    })


})

// delete 
router.delete('/delete/:id',(req,res)=>{
    let sql = `DELETE FROM articles WHERE id=${req.params.id}`
    let query = conn.query(sql,(err,result)=>{
        if(err) throw err
        res.send(JSON.stringify({
            status:200,
            error:null,
            response:"Record Deleted Successfully"
        }))
    })
})

module.exports = router;
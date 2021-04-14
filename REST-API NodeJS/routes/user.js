const router = require('express').Router()
const mysql = require('mysql')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
    console.log("User API ---- CONNECTION OK");
})
// connection part ends



router.post('/register',async (req,res)=>{

    try{
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        const user = {
            email : req.body.email,
            password: hashedPassword
        }
        
        let sql = `INSERT INTO UserLogin SET ?`

        let query = conn.query(sql,user,(err,result)=>{    
            if(err)
                throw err

                res.send(JSON.stringify({
                status:200,
                error:null,
                message: "User Created...",
                data: user
            }))
        })


    } catch {
        res.statusCode(500)
    }
})

router.post('/login',(req,res)=>{
    
    let sql = `SELECT * FROM UserLogin WHERE email='${req.body.email}'`

    let qu = conn.query(sql,async (err,result)=>{
        if(err || result.length==0)
            throw err

        try {
            if(await bcrypt.compare(req.body.password, result[0].password)) {
                
                const user = {
                    login_id:result[0].user_id,
                    email:req.body.email,
                }

                // create a JWT     
                jwt.sign(user,'Vampire',{expiresIn:'1d'},(err,token)=>{
                    res.json(
                        {
                            token
                        } 
                    )
                })
            } else {
            res.send('Error Loggin in')
            }
        } catch {
            res.status(500).send()
        }
    })
})


const test = ()=> console.log("Hello World")



module.exports = {
    router
} 
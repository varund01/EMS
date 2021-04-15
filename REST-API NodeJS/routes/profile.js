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
    console.log("Profile API ------ CONNECTION OK");
})

// connection ends



router.get('/view/',(req,res)=>{
    let sql = `SELECT * FROM Employee`
    
    let query = conn.query(sql,(err,result)=>{
        if(err) throw err
        
        var temp = []
        const total_rows = result.length

        result.forEach((element,idx) => {
           
            let poi = `SELECT skill_id,skill_name from Skills WHERE emp_id=${element["emp_id"]}`
           
           let bg = conn.query(poi,(err,skillset)=>{
                    let temp_skills =[];

                    skillset.forEach(elem=> temp_skills.push(elem))
                    
                    element["skills"] = temp_skills
                    
                    let nb = `SELECT fact_id,fact_desc from FunFacts WHERE emp_id=${element["emp_id"]}`

                    let cxv = conn.query(nb,(err,funfacts)=>{
                    
                    let temp_facts =[];

                    funfacts.forEach(p=> temp_facts.push(p))
                    
                    element["fun_facts"]=temp_facts
                
                    temp.push(element)

                    // if this is the last row then send the output the JSON
                    if(idx==total_rows-1){
                            
                        res.send(JSON.stringify({
                            status:200,
                            error:null,
                            response: temp
                        }))
                        console.log("Data Displayed ")
                        return;}
                    })
           })
        });
    })
})

// get Single Profile

router.get('/view/:id/',(req,res)=>{
    let sql = `SELECT * FROM Employee WHERE emp_id=${req.params.id}`
    
    let query = conn.query(sql,(err,result)=>{
        if(err) throw err

        //skills
        let poi = `SELECT skill_id,skill_name from Skills WHERE emp_id=${result[0]["emp_id"]}`
         
        let rd = conn.query(poi,(err,skillset)=>{
            
            let temp_skills =[];

            skillset.forEach(elem=> temp_skills.push(elem))
                
            result[0]["skills"]=temp_skills

            // fun facts
            let nb = `SELECT fact_id,fact_desc from FunFacts WHERE emp_id=${result[0]["emp_id"]}`

            let cxv = conn.query(nb,(err,funfacts)=>{
                let temp_facts = []
                
                funfacts.forEach(e=>{ 
                    temp_facts.push(e); 
                    console.log(e) 
                })

                result[0]["fun_facts"] = temp_facts

                res.send(JSON.stringify({
                    status:200,
                    error:null,
                    response: result
                }))
            })
            console.log("Single Data Displayed...")
        })

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
        about:req.body.about,
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
                                   about='${req.body.about}'
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

// SKILL APIs

router.post('/skill/add/',(req,res)=>{
    const data = {
        skill_name:req.body.skill,
        emp_id:req.body.emp_id
    }
    
    let sql = `INSERT INTO Skills SET ?`

    let pg = conn.query(sql,data,(err,result)=>{
        if(err) throw err
        res.send(JSON.stringify({
            status:200,
            error:null,
            response:"New Skill Added Successfully"
        }))
    })
})

router.delete('/skill/delete/:id',(req,res)=>{
    
    let sql = `DELETE FROM Skills WHERE skill_id=${req.params.id}`

    let pg = conn.query(sql,(err,result)=>{
        if(err) throw err
        res.send(JSON.stringify({
            status:200,
            error:null,
            response:"Skill DELETED Successfully"
        }))
    })
})

// FUN FACTS API

router.post('/facts/add/',(req,res)=>{
    const data = {
        fact_desc:req.body.fact_desc,
        emp_id:req.body.emp_id
    }
    
    let sql = `INSERT INTO FunFacts SET ?`

    let pg = conn.query(sql,data,(err,result)=>{
        if(err) throw err
        res.send(JSON.stringify({
            status:200,
            error:null,
            response:"New Fact(s) Added Successfully"
        }))
    })
})

router.delete('/facts/delete/:id',(req,res)=>{
    let sql = `DELETE FROM FunFacts WHERE fact_id=${req.params.id}`

    let pg = conn.query(sql,(err,result)=>{
        if(err) throw err
        res.send(JSON.stringify({
            status:200,
            error:null,
            response:"Fact DELETED Successfully"
        }))
    })
})


module.exports = router


const express = require('express')
const dbconnect = require('./dbconnection');
const schemas = require('./schemas');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())

app.get('/api/get', async (req, resp) => {

    let datas = await schemas.find();
    console.log(datas)
    resp.send(datas)

})
app.post('/post_name', async (req, resp) => {

    //console.log(req.body)
    try {
        let data= new schemas(req.body);
        let result= await data.save();
        console.log(result)
        // resp.send(result);
        resp.send(result)
    }
    catch(err){
        resp.json({status:"not good "})

    }
})

app.delete('/delete/:_id',async (req, resp)=>{
    console.log(req.params)
    let data =await schemas.deleteOne(req.params);
    resp.send(data)
})

app.put('/put',async(req,resp)=>{
 
    let result=await schemas.updateOne(
        {NewText:req.body.text},
        {$set:req.body}
    )
    resp.send(result)
})

const start = async () => {
    try {
        await dbconnect()
        app.listen(5600);
    }
    catch (err) {
        console.log('connection failed ')
    }
}

start();
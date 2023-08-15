const mongoose= require('mongoose')

const schemas=mongoose.Schema(
    {
        NewText:String,
        Date:Date
    }
)

module.exports=mongoose.model('Lists', schemas);